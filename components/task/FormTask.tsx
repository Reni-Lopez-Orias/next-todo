"use client";

import { useActionState, useEffect, useState } from "react";

import Input from "../ui/Input";
import toast from "react-hot-toast";
import Select from "../ui/Select";
import FormButton from "../ui/FormButton";
import { formatDueDateForInput } from "@/lib/helper";
import { saveTask } from "@/lib/actions/task.actions";
import { IPriorityOptionsSelect, ITask, ITaskState } from "@/lib/definitions";

interface FormProps {
  task?: ITask;
  userId?: number;
  setOpenModal: (open: boolean) => void;
}

export default function FormTask({ setOpenModal, userId, task }: FormProps) {
  const initialState: ITaskState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState<ITaskState, FormData>(
    saveTask,
    initialState
  );

  const [lastState, setLastState] = useState<ITaskState | null>(null);

  // Manejo de cambios de estado
  useEffect(() => {
    if (state !== lastState) {
      if (state.message && !state.success) {
        toast.error(state.message);
      } else if (state.message && state.success) {
        toast.success(state.message);
        setOpenModal(false);
      }
      setLastState(state);
    }
  }, [state, lastState]);

  return (
    <form action={formAction} className="w-full space-y-4">
      {/* userId */}
      <input hidden name="userId" defaultValue={userId} />

      {/* Si es edición => enviamos taskId */}
      {task?.id && <input hidden name="taskId" defaultValue={task.id} />}

      <Input
        type="text"
        maxLength={50}
        required
        classBox="mb-0"
        name="description"
        placeholder="Type here"
        label="Describe your task"
        error={state.errors?.description}
        defaultValue={task?.description ?? ""}
      />

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Select
          classBox="mb-0"
          name="priority"
          label="Priority"
          options={IPriorityOptionsSelect}
          value={task?.priority ?? "low"}
        />

        <Input
          type="date"
          name="due_date"
          label="Place a date?"
          placeholder="dd/mm/yyyy"
          error={state.errors?.dueDate}
          defaultValue={
            task?.due_date ? formatDueDateForInput(task?.due_date) : ""
          }
        />
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="btn btn-error text-white w-full rounded-md"
        >
          Close
        </button>
        <FormButton pendingText="Saving..." isPending={isPending}>
          {task ? "Update Task" : "Create Task"}
        </FormButton>
      </div>
    </form>
  );
}
