"use client";

import Modal from "../ui/Modal";
import { useState } from "react";
import TaskForm from "./FormTask";
import { MdEdit } from "react-icons/md";
import { ITask } from "@/lib/definitions";

interface IEditTaskProps {
  task: ITask;
  userId: number;
}

export default function EditTask({ task, userId }: IEditTaskProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {/* Botón de editar */}
      <button
        title="Editar tarea"
        onClick={() => setOpenModal(true)}
        className="btn btn-ghost btn-circle"
      >
        <MdEdit size={20} />
      </button>

      {/* Modal de edición */}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h3 className="font-bold text-xl mb-4">Editar Tarea</h3>
        <TaskForm task={task} userId={userId} setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
}
