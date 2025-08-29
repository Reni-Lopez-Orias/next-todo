"use server";

import { z } from "zod";
import { hash } from "bcrypt";
import postgres from "postgres";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ILoginState, IRegisterState } from "../definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name cannot exceed 50 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export async function authenticate(
  prevState: ILoginState,
  formData: FormData
): Promise<ILoginState> {
  const callbackUrl = (formData.get("callbackUrl") as string) || "/dashboard";

  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Required fields are invalid.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials.", success: false };
        default:
          return { message: "Something went wrong.", success: false };
      }
    }
    return { message: "Login failed.", success: false };
  }

  redirect(callbackUrl);
}

export async function logoutAction() {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    console.error("Logout error:", error);
  }
  revalidatePath("/");
  redirect("/");
}

export async function addUser(
  prevState: IRegisterState,
  formData: FormData
): Promise<IRegisterState> {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Required fields are invalid.",
      success: false,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const rows = await sql`SELECT 1 FROM users WHERE email = ${email}`;
    if (rows.length > 0) {
      return { message: "This email is already in use.", success: false };
    }

    const hashedPassword = await hash(password, 10);

    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;

    await signIn("credentials", { email, password, redirect: false });
  } catch (error) {
    console.error("Registration error:", error);
    return { message: "Failed to create account.", success: false };
  }

  redirect("/dashboard");
}
