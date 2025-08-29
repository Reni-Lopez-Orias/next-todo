"use client";

import Modal from "./Modal";
import TaskForm from "../task/FormTask";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

interface IAddTaskButton {
  userId: number;
}

export default function AddTaskButton({ userId }: IAddTaskButton) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="float-btn btn btn-success w-15 h-15 sm:w-10 sm:h-10 btn-circle fixed sm:static bottom-8 sm:bottom-10 right-7 sm:right-10 shadow-lg"
      >
        <IoIosAdd color="white" size={60} />
      </button>

      {/* MODAL */}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h3 className="font-bold text-xl mb-4">New Task</h3>
        <TaskForm userId={userId} setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
}
