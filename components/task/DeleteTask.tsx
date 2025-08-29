import { MdDelete } from "react-icons/md";
import { deleteTask } from "@/lib/actions/task.actions";

interface DeleteTaskProps {
  taskId: number;
}

export default async function DeleteTask({ taskId }: DeleteTaskProps) {
  const deleteT = await deleteTask.bind(null, taskId);
  return (
    <form action={deleteT}>
      <button
        type="submit"
        className="btn btn-ghost btn-circle"
        style={{ color: "var(--color-foreground)" }}
      >
        <MdDelete size={20} />
      </button>
    </form>
  );
}
