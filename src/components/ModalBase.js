import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IoCloseOutline as CloseModal } from "react-icons/io5";
import TaskForm from "./TaskForm";

import s from "./ModalBase.module.css";
import TaskCard from "./TaskCard";

const modalRoot = document.getElementById("modal-root");

function ModalBase({
  setIsOpen,
  setShowCard,
  type,
  id,
  name,
  description,
  priority,
  dueDate,
  isDone,
  setTasks,
}) {
  const closeModal = () => {
    if (type === "createtask") {
      setIsOpen(false);
    } else if (type === "showtask") {
      setShowCard(false);
    }
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  const closeOverlay = (e) => {
    if (e.currentTarget === e.target || e.code === "Escape") {
      closeModal();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={closeOverlay}>
      <div className={s.ModalBase}>
        <CloseModal className={s.ModalBase__close} onClick={closeModal} />
        <div className={s.ModalBase__body}>
          {type === "createtask" && (
            <>
              {" "}
              <h2 className={s.ModalBase__heading}>Create Task</h2>
              <TaskForm closeModal={closeModal} setTasks={setTasks} />
            </>
          )}
          {type === "edittask" && (
            <>
              {" "}
              <h2 className={s.ModalBase__heading}>Edit Task</h2>
            </>
          )}
          {type === "showtask" && (
            <TaskCard
              id={id}
              name={name}
              description={description}
              priority={priority}
              dueDate={dueDate}
              isDone={isDone}
              closeModal={closeModal}
              setTasks={setTasks}
            />
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalBase;
