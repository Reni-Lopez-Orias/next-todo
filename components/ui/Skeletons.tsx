export function StatsSkeleton() {
  return (
    <div
      className="tabs gap-2 tabs-boxed p-1 rounded-lg"
      style={{ backgroundColor: "var(--color-background)" }}
      role="status"
      aria-label="Loading stats"
    >
      {[0, 1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="
            h-15 sm:h-9 flex-1 flex items-center justify-center 
            rounded-xl transition-all duration-200 ease-in-out
            p-3
          "
        >
          {/* skeleton block + small badge */}
          <div className="w-full flex items-center justify-between gap-3">
            <div
              className="w-1/2 h-4 rounded-md 
              bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
            />
            <div
              className="w-8 h-4 rounded-full 
              bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 4 }) {
  return (
    <table
      className="table w-full"
      aria-label="Loading tasks"
      role="status"
      style={{
        backgroundColor: "var(--color-card)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-foreground)",
      }}
    >
      <thead>
        <tr>
          <th className="py-2">
            <div
              className="w-32 h-4 rounded-md 
              bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
            />
          </th>
          <th className="text-end py-2">
            <div
              className="w-16 h-4 rounded-md 
              bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
            />
          </th>
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: rows }).map((_, i) => (
          <tr
            key={i}
            className="hover:bg-base-200/40"
            style={{ borderColor: "var(--color-accent)", opacity: 1 }}
          >
            <td className="py-3">
              <div className="flex gap-3 items-center">
                {/* checkbox skeleton */}
                <div
                  className="w-5 h-5 rounded-sm 
                  bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
                />

                {/* text skeletons */}
                <div className="flex-1">
                  <div
                    className="w-3/4 h-4 rounded-md mb-2 
                    bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
                  />
                  <div
                    className="w-1/3 h-3 rounded-md 
                    bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
                  />
                </div>
              </div>
            </td>

            <td className="flex justify-end gap-2 py-3">
              <div
                className="w-9 h-9 rounded-full 
                bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
              />
              <div
                className="w-9 h-9 rounded-full 
                bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.04)] animate-pulse"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
