import TaskControllers from "./TaskControllers";

function TaskCard({ name, description, priority, dueDate, isDone }) {
  return (
    <>
      {" "}
      <li>
        <p>{name}</p>
        <p>{description}</p>
        <p>{priority}</p>
        <p>{dueDate}</p>
        <p>{isDone.toString()}</p>
      </li>
      <TaskControllers />
    </>
  );
}
export default TaskCard;
