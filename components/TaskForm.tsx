import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { PriorityOptionsSelect } from "@/lib/definitions";

interface FormProps {
  setOpenModal: (open: boolean) => void;
}

export const TaskForm = ({ setOpenModal }: FormProps) => {
  return (
    <form className="w-full space-y-4">
      <Input
        type="text"
        name="description"
        placeholder="Type here"
        label="Describe your task"
      />

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Select
          name="priority"
          label="Priority"
          options={PriorityOptionsSelect}
        />

        <Input
          type="date"
          name="due_date"
          label="Place a date?"
          placeholder="dd/mm/yyyy"
        />
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={() => setOpenModal(false)}
          className="btn btn-outline w-full rounded-md"
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-success w-full rounded-md text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
};
