"use client";

import { useRouter, useSearchParams } from "next/navigation";

export interface IStatsProps {
  total: number;
  pending: number;
  completed: number;
  highPriority: number;
}

export default function Stats(statsTasks: IStatsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // lee el status actual de la URL; default 'all'
  const status = (searchParams?.get("status") as string) || "all";

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("status", value);
    // conservamos otros params si existen
    router.push(`?${params.toString()}`);
  };

  const makeButtonStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "var(--color-accent)" : "transparent",
    color: isActive ? "var(--color-card)" : "var(--color-foreground)",
  });

  const makeBadgeStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "var(--color-card)" : "var(--color-accent)",
    color: isActive ? "var(--color-accent)" : "var(--color-card)",
  });

  return (
    <div
      className="tabs gap-2 tabs-boxed p-1 rounded-lg"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* All */}
      {(() => {
        const isActive = status === "all";
        return (
          <button
            role="tab"
            onClick={() => handleClick("all")}
            className="hover:bg-[var(--color-card)] h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out rounded-xl"
            aria-selected={isActive}
            style={makeButtonStyle(isActive)}
          >
            <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
              All
              <span
                className="badge badge-sm mt-1 sm:mt-0 sm:ml-1"
                style={makeBadgeStyle(isActive)}
              >
                {statsTasks.total || 0}
              </span>
            </span>
          </button>
        );
      })()}

      {/* Pending */}
      {(() => {
        const isActive = status === "pending";
        return (
          <button
            role="tab"
            onClick={() => handleClick("pending")}
            className="h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out rounded-xl"
            aria-selected={isActive}
            style={makeButtonStyle(isActive)}
          >
            <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
              Pending
              <span
                className="badge badge-sm mt-1 sm:mt-0 sm:ml-1"
                style={makeBadgeStyle(isActive)}
              >
                {statsTasks.pending || 0}
              </span>
            </span>
          </button>
        );
      })()}

      {/* Completed */}
      {(() => {
        const isActive = status === "completed";
        return (
          <button
            role="tab"
            onClick={() => handleClick("completed")}
            className="hover:bg-[var(--color-card)] h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out rounded-xl"
            aria-selected={isActive}
            style={makeButtonStyle(isActive)}
          >
            <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
              Completed
              <span
                className="badge badge-sm mt-1 sm:mt-0 sm:ml-1"
                style={makeBadgeStyle(isActive)}
              >
                {statsTasks.completed || 0}
              </span>
            </span>
          </button>
        );
      })()}

      {/* Priority */}
      {(() => {
        const isActive = status === "priority";
        return (
          <button
            role="tab"
            onClick={() => handleClick("priority")}
            className="hover:bg-[var(--color-card)] h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out rounded-xl"
            aria-selected={isActive}
            style={makeButtonStyle(isActive)}
          >
            <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
              Priority
              <span
                className="badge badge-sm mt-1 sm:mt-0 sm:ml-1"
                style={makeBadgeStyle(isActive)}
              >
                {statsTasks.highPriority || 0}
              </span>
            </span>
          </button>
        );
      })()}
    </div>
  );
}
