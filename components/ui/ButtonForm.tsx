import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonFormProps {
  className?: string;
  isPending: boolean;
  pendingText?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const ButtonForm = ({
  isPending,
  pendingText = "Loading...",
  children,
  className = "w-full rounded-md bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50",
  type = "submit",
  onClick,
}: ButtonFormProps) => {
  return (
    <button
      type={type}
      disabled={isPending}
      aria-disabled={isPending}
      className={className}
      onClick={onClick}
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
};
