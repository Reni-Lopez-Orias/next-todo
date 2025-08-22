import { SignInForm } from "@/components/SignInForm";

export default function SignIn() {
  return (
    <div className="w-full max-w-sm space-y-5 rounded-xl bg-white p-6 shadow-lg sm:p-8 border border-gray-200">
      <h1 className={"text-2xl font-semibold"}>Sign In</h1>
      <SignInForm />
    </div>
  );
}
