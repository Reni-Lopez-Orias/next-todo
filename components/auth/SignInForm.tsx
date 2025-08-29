"use client";

import Link from "next/link";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import FormButton from "../ui/FormButton";
import { authenticate } from "@/lib/actions/auth.actions";
import { useActionState, useEffect, useState } from "react";

interface ILoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export const SignInForm = () => {
  const initialState: ILoginState = {
    errors: {},
    message: null,
    success: false,
  };

  const [lastState, setLastState] = useState<ILoginState | null>(null);
  const [state, formAction, isPending] = useActionState<ILoginState, FormData>(
    authenticate,
    initialState
  );

  // 👉 recordar usuario
  const [remember, setRemember] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");

  // Cargar email guardado en localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setSavedEmail(storedEmail);
      setRemember(true);
    }
  }, []);

  // Manejo de cambios de estado del login
  useEffect(() => {
    if (state !== lastState) {
      console.log("changes:", state);

      if (state.message && !state.success) {
        toast.error(state.message);
        console.log("Error:", state.message);
      }

      setLastState(state);
    }
  }, [state, lastState]);

  // Guardar/eliminar email cuando cambia el checkbox
  const handleRememberChange = (checked: boolean) => {
    setRemember(checked);
    const form = document.querySelector("form") as HTMLFormElement | null;
    const formData = new FormData(form || undefined);
    const email = formData.get("email") as string;

    if (checked && email) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };

  return (
    <form action={formAction}>
      <Input
        type="email"
        name="email"
        label="Email"
        maxLength={50}
        required={true}
        error={state.errors?.email}
        placeholder="example@email.com"
        defaultValue={savedEmail} // 👉 email guardado si existe
      />
      <Input
        minLength={6}
        maxLength={50}
        required={true}
        type="password"
        name="password"
        label="Password"
        placeholder="••••••••"
        error={state.errors?.password}
      />

      {/* Recordar usuario */}
      <div className="flex items-center gap-2 my-2">
        <input
          id="remember"
          type="checkbox"
          className="checkbox"
          checked={remember}
          onChange={(e) => handleRememberChange(e.target.checked)}
          style={{
            accentColor: "var(--color-accent)",
            backgroundColor: "var(--color-card)",
          }}
        />
        <label
          htmlFor="remember"
          className="text-sm font-semibold"
          style={{ color: "var(--color-accent)" }}
        >
          Remember me
        </label>
      </div>

      <div className="my-4">
        <FormButton isPending={isPending} pendingText="Signing in...">
          Login
        </FormButton>
      </div>

      <div className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-bold hover:underline"
          style={{ color: "var(--color-accent)" }}
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
};
