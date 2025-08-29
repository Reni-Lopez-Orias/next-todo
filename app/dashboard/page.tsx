import { auth } from "@/auth";
import Table from "@/components/ui/Table";
import { redirect } from "next/navigation";
import { IStatus } from "@/lib/definitions";
import Stats from "@/components/task/Stats";
import Header from "@/components/ui/Header";
import Pagination from "@/components/ui/Pagination";
import { fetchTasks } from "@/lib/actions/task.actions";
import InputSearch from "@/components/ui/InputSearch";
import AddTaskButton from "@/components/ui/AddTaskButton";
import { fetchStatsTask, fetchTasksPages } from "@/lib/data";

export interface ISearchParams {
  page?: string;
  query?: string;
  status?: IStatus;
}

export default async function Page(props: {
  searchParams?: Promise<ISearchParams>;
}) {
  const session = await auth();
  const userId = Number(session?.user?.id) || 0;

  if (userId === 0) {
    redirect("/sign-in");
  }

  const searchParams = await props?.searchParams;

  const query = searchParams?.query || "";
  const status = searchParams?.status as IStatus;
  const currentPage = Number(searchParams?.page) || 1;

  const statsTasks = await fetchStatsTask(userId);
  const totalPages = await fetchTasksPages(userId, query, status);
  const tasks = await fetchTasks(userId, query, currentPage, status);

  return (
    <div className="flex flex-col items-center min-h-[100dvh] w-full sm:max-w-4xl mx-auto gap-3">
      {/* HEADER */}
      <Header />

      {/* SEARCH */}
      <div className="w-full flex items-center gap-3">
        <InputSearch />

        {/* FLOATING BTN */}
        <AddTaskButton userId={userId} />
      </div>

      {/* TABLE */}
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full">
          <Stats
            total={statsTasks.total}
            pending={statsTasks.pending}
            completed={statsTasks.completed}
            highPriority={statsTasks.highPriority}
          />
        </div>
        <div
          style={{ border: "solid var(--color-accent) 1px" }}
          className="w-full overflow-x-auto rounded-box border border-base-content/10 bg-base-100 shadow-sm"
        >
          <Table tasks={tasks} userId={userId} />
        </div>
        {tasks.length > 0 && <Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}
