import { MdDeleteOutline, MdDone, MdEditNote } from "react-icons/md";
import { Button } from "react-bootstrap";
import s from "./TaskControllers.module.css";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function TaskControllers({ showAdd, id, setTasks }) {
  const [isLoading, setIsLoading] = useState(false);

  const deleteTask = () => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:4000/api/tasks/${id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    setTasks((prevTasks) => prevTasks.filter((item) => item._id !== id));
  };

  return (
    <>
      {isLoading && <Spinner animation="border" role="status" />}
      {showAdd && (
        <div className={s.TaskControllers}>
          <Button className={s.TaskController}>
            {" "}
            <MdEditNote />
          </Button>
          <Button className={s.TaskController} onClick={deleteTask}>
            {" "}
            <MdDeleteOutline />
          </Button>
        </div>
      )}
    </>
  );
}

export default TaskControllers;
