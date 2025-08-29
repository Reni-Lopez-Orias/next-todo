import { capitalizeFirst } from "@/lib/helper";

type Priority = "high" | "mid" | "low" | string | undefined;

interface PriorityBadgeProps {
  priority?: Priority;
  completed?: boolean;
  className?: string;
  "aria-label"?: string;
}

export default function PriorityBadge({
  priority,
  completed = false,
  className = "",
  "aria-label": ariaLabel,
}: PriorityBadgeProps) {
  const p = (priority || "").toString().toLowerCase();

  const backgroundColor = completed ? "var(--color-accent)" : "transparent";

  const borderColor = completed
    ? "var(--color-accent)"
    : p === "high"
    ? "var(--priority-high, #ef4444)"
    : p === "mid" || p === "medium"
    ? "var(--priority-mid, #f59e0b)"
    : "var(--priority-low, #10b981)";

  const color = completed
    ? "var(--color-card)"
    : p === "high"
    ? "var(--priority-high, #ef4444)"
    : p === "mid" || p === "medium"
    ? "var(--priority-mid, #f59e0b)"
    : "var(--priority-low, #10b981)";

  return (
    <div
      className={`badge w-10 h-5 sm:h-auto sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0 ${className}`}
      style={{
        backgroundColor,
        borderColor,
        color,
      }}
      aria-label={ariaLabel ?? `Priority: ${priority ?? "low"}`}
    >
      {capitalizeFirst(priority) ?? "low"}
    </div>
  );
}
