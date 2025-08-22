import Link from "next/link";
import { Input } from "./ui/Input";
import { ButtonForm } from "./ui/ButtonForm";

export const SignUpForm = () => {
  return (
    <form action="">
      <Input
        type="text"
        name="name"
        label="Name"
        maxLength={50}
        error={"state.errors?.email"}
        placeholder="Your name"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        maxLength={50}
        inputMode="email"
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
        Already have an account?{" "}
        <Link href="/sign-in" className="font-bold text-black hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
};
