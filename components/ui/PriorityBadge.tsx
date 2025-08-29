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

  // Definimos los colores base de cada prioridad
  const baseColor =
    p === "high"
      ? "var(--priority-high, #ef4444)"
      : p === "mid" || p === "medium"
      ? "var(--priority-mid, #f59e0b)"
      : "var(--priority-low, #10b981)";

  // Fondo transparente siempre, borde y texto cambian según completed
  const backgroundColor = completed ? "rgba(0,0,0,0.05)" : "transparent";
  const borderColor = baseColor;
  const color = baseColor;

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
      {capitalizeFirst(priority) ?? "Low"}
    </div>
  );
}
