import { MdDeleteOutline, MdDone, MdEditNote } from "react-icons/md";
import { Button } from "react-bootstrap";
import s from "./TaskControllers.module.css";
import { useState } from "react";

function TaskControllers({ showAdd }) {
  return (
    <div className={s.TaskControllers}>
      {" "}
      <Button>
        <MdDone />
      </Button>
      {showAdd && (
        <div className={s.TaskControllers__add}>
          <Button className={s.TaskController}>
            {" "}
            <MdEditNote />
          </Button>
          <Button className={s.TaskController}>
            {" "}
            <MdDeleteOutline />
          </Button>
        </div>
      )}
    </div>
  );
}

export default TaskControllers;
