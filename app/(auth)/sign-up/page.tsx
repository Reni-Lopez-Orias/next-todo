import { SignUpForm } from "@/components/auth/SignUpForm";

export default function SignUp() {
  return (
    <div
      style={{ border: "solid var(--color-accent) 1px" }}
      className="w-full max-w-sm space-y-5 rounded-xl bg-white p-6 shadow-lg sm:p-8 border border-gray-200"
    >
      <h1 className={"text-2xl font-semibold"}>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}
