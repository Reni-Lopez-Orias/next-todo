"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonFormProps {
  className?: string;
  isPending: boolean;
  pendingText?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function FormButton({
  isPending,
  pendingText = "Loading...",
  children,
  className = "w-full cursor-pointer rounded-md py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  type = "submit",
  onClick,
}: ButtonFormProps) {
  return (
    <button
      type={type}
      disabled={isPending}
      aria-disabled={isPending}
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-accent)",
        color: "white",
        borderColor: "var(--color-accent)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-second-accent)";
        // e.currentTarget.style.color = 'var(--color-background)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent)";
        // e.currentTarget.style.color = 'var(--color-card)';
      }}
    >
      {isPending ? (
        <div className="flex items-center justify-center gap-2">
          <AiOutlineLoading3Quarters className="animate-spin" />
          {pendingText}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
