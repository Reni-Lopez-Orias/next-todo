"use client";

import Link from "next/link";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import FormButton from "../ui/FormButton";
import { IRegisterState } from "@/lib/definitions";
import { addUser } from "@/lib/actions/auth.actions";
import { useActionState, useEffect, useState } from "react";

export const SignUpForm = () => {
  const formState: IRegisterState = {
    errors: {},
    message: null,
    success: false,
  };

  const [lastState, setLastState] = useState<IRegisterState | null>(null);
  const [state, formAction, isPending] = useActionState(addUser, formState);

  useEffect(() => {
    if (state !== lastState) {
      // changes
      console.log("changes:", state);

      if (state.success) {
        // success
        console.log("Login exitoso!");
      }

      if (state.message && !state.success) {
        // errors
        toast.error(state.message);
        console.log("Error:", state.message);
      }

      setLastState(state);
    }
  }, [state, lastState]);

  return (
    <form action={formAction}>
      <Input
        type="text"
        name="name"
        label="Name"
        maxLength={50}
        required={true}
        error={state.errors?.email}
        placeholder="Your name"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        maxLength={50}
        required={true}
        inputMode="email"
        error={state.errors?.email}
        placeholder="example@email.com"
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
      <div className="my-4">
        <FormButton pendingText="Creating account..." isPending={isPending}>
          Submit
        </FormButton>
      </div>

      <div className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-bold hover:underline"
          style={{ color: "var(--color-accent)" }}
        >
          Sign In
        </Link>
      </div>
    </form>
  );
};
