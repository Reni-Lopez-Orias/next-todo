"use client";

import { IoIosAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Modal } from "../components/ui/Modal";
import { useState } from "react";
import { Table } from "@/components/ui/Table";
import { Header } from "@/components/ui/Header";
import { Pagination } from "@/components/ui/Pagination";
import { Stats } from "@/components/Stats";
import { TaskForm } from "@/components/TaskForm";
import { ProsgressTask } from "@/components/ProsgressTask";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-[100dvh] w-full sm:max-w-4xl mx-auto p-3 gap-3">
      {/* HEADER */}
      <Header />

      {/* SEARCH */}
      <div className="w-full flex gap-3">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoSearch size={20} className="opacity-70" />
          <input type="search" className="grow" placeholder="Search tasks..." />
        </label>

        {/* FLOATING BTN */}
        <button
          onClick={() => setOpenModal(true)}
          className="btn btn-success w-15 h-15 sm:w-10 sm:h-10 btn-circle fixed sm:static bottom-8 sm:bottom-10 right-7 sm:right-10 shadow-lg"
        >
          <IoIosAdd color="white" size={60} />
        </button>
      </div>

      {/* TABLE */}
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full">
          <Stats />
        </div>
        <div className="w-full overflow-x-auto rounded-box border border-base-content/10 bg-base-100 shadow-sm">
          <Table setOpenModal={setOpenModal} />
        </div>
        <Pagination />
      </div>

      {/* PROGRESS */}
      <ProsgressTask />

      {/* MODAL */}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h3 className="font-bold text-xl mb-4">New Task</h3>
        <TaskForm setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
}
