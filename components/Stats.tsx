
export const Stats = () => {
  return (
    <div className="tabs gap-2 tabs-boxed bg-base-200 p-1 rounded-lg">
      <button
        role="tab"
        className="h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out hover:bg-base-300 hover:rounded-xl"
        aria-selected="false"
      >
        <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
          All
          <span className="badge badge-sm badge-neutral mt-1 sm:mt-0 sm:ml-1">
            5
          </span>
        </span>
      </button>
      <button
        role="tab"
        className="h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out bg-base-300 rounded-xl" // Active state
        aria-selected="true"
      >
        <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
          Pending
          <span className="badge badge-sm badge-warning mt-1 sm:mt-0 sm:ml-1">
            3
          </span>
        </span>
      </button>
      <button
        role="tab"
        className="h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out hover:bg-base-300 hover:rounded-xl"
        aria-selected="false"
      >
        <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
          Completed
          <span className="badge badge-sm badge-success mt-1 sm:mt-0 sm:ml-1">
            2
          </span>
        </span>
      </button>
      <button
        role="tab"
        className="h-15 sm:h-9 tab flex-1 flex-col sm:flex-row transition-all duration-200 ease-in-out hover:bg-base-300 rounded-xl"
        aria-selected="false"
      >
        <span className="flex flex-col items-center gap-0 sm:gap-1 sm:flex-row font-bold">
          Priority
          <span className="badge badge-sm badge-error mt-1 sm:mt-0 sm:ml-1">
            1
          </span>
        </span>
      </button>
    </div>
  );
};
