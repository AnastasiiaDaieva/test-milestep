import { MdDeleteOutline, MdDoneAll, MdDone, MdEditNote } from "react-icons/md";

function TaskControllers() {
  return (
    <div>
      {" "}
      <MdEditNote />
      edit <MdDone /> done <MdDeleteOutline />
      delete
    </div>
  );
}

export default TaskControllers;
