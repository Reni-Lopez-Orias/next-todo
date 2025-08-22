import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App | Register",
  description: "Create your account to manage tasks easily in Todo App.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      {children}
    </div>
  );
}
