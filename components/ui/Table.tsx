import EditTask from "../task/EditTask";
import { ITask } from "@/lib/definitions";
import PriorityBadge from "./PriorityBadge";
import DeleteTask from "../task/DeleteTask";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { capitalizeFirst } from "@/lib/helper";
import CompleteTask from "../task/CompleteTask";

interface TableProps {
  tasks: ITask[];
  userId: number;
}

export default function Table({ tasks, userId }: TableProps) {
  console.log(tasks);
  
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-full bg-muted/50 p-6">
          <FaCheckCircle className="h-12 w-12 text-[var(--color-accent)]" />
        </div>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">
          No tasks to display
        </h3>
      </div>
    );
  }

  return (
    <table
      className="table"
      style={{
        backgroundColor: "var(--color-card)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-foreground)",
      }}
    >
      <thead>
        <tr style={{ borderBottomColor: "var(--color-accent)" }}>
          <th style={{ color: "var(--color-accent)" }}>Task</th>
          <th className="text-end" style={{ color: "var(--color-accent)" }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr
            key={task.id}
            className="hover:bg-base-200/40"
            style={{
              borderColor: "var(--color-accent)",
            }}
          >
            <td className="py-1">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <CompleteTask task={task} />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <span
                      className="truncate max-w-40 sm:max-w-80"
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                        color: "var(--color-foreground)",
                      }}
                    >
                      {capitalizeFirst(task.description)}
                    </span>
                    <PriorityBadge
                      priority={task.priority}
                      completed={task.completed}
                    />
                  </div>
                  {task.due_date && (
                    <div
                      style={{ marginTop: "-5px" }}
                      className="flex gap-1 items-center"
                    >
                      <IoIosCalendar size={18} color="var(--color-accent)" />
                      <span
                        className="font-semibold mt-1"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {task.due_date}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </td>
            <td className="flex justify-end gap-0 sm:gap-2">
              <DeleteTask taskId={task.id} />
              <EditTask task={task} userId={userId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
