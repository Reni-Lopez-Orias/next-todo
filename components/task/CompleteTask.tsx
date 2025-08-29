import { completeTask } from "@/lib/actions/task.actions";
import { ITask } from "@/lib/definitions";
import { FaCheck, FaRegCircle } from "react-icons/fa";

interface CompleteTaskProps {
  task: ITask;
}

export default function CompleteTask({ task }: CompleteTaskProps){
    const completeT = completeTask.bind(null, task.id);
      return (
    <form action={completeT}>
      <button type="submit" className="cursor-pointer">
        {task.completed ? (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
          <FaCheck className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
        </div>
      ) : (
        <FaRegCircle className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
      )}
      </button>
    </form>
  );
}