import { Button } from "react-bootstrap";
function AddTaskButton({ setIsOpen }) {
  return <Button onClick={() => setIsOpen(true)}>Create task</Button>;
}

export default AddTaskButton;
