"use client";
import React, { ReactNode } from "react";

interface ModalProps {
  openModal: boolean;
  children: ReactNode;
  setOpenModal: (openModal: boolean) => void;
}

export default function Modal({
  openModal,
  setOpenModal,
  children,
}: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal")) {
      setOpenModal(false);
    }
  };

  return (
    <dialog
      onClick={handleBackdropClick}
      // style={{ position: "absolute" }}
      className={`modal w-full ${openModal ? "modal-open" : ""}`}
    >
      <div
        className="modal-box"
        style={{
          background: "var(--color-background)",
          border: "solid var(--color-accent) 1px",
        }}
      >
        <button
          onClick={() => setOpenModal(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-5"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
}
