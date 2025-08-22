import Link from "next/link";
import { Input } from "./ui/Input";
import { ButtonForm } from "./ui/ButtonForm";

export const SignInForm = () => {
  return (
    <form action="">
      <Input
        type="email"
        name="email"
        label="Email"
        maxLength={50}
        error={"state.errors?.email"}
        placeholder="example@email.com"
      />
      <Input
        minLength={6}
        maxLength={50}
        type="password"
        name="password"
        label="Password"
        placeholder="••••••••"
        error={"state.errors?.password"}
      />
      <div className="my-4">
        <ButtonForm isPending={true}>Login</ButtonForm>
      </div>

      <div className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-bold text-black hover:underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
};
