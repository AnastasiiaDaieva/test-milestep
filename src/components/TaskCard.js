import TaskControllers from "./TaskControllers";
import {
  Card,
  Container,
  InputGroup,
  FormControl,
  Form,
  ListGroup,
} from "react-bootstrap";
import { useState } from "react";

function TaskCard({ name, description, priority, dueDate, isDone }) {
  const getDate = new Date(dueDate).toISOString().substring(0, 10);
  const convertedDate = getDate.split("-").reverse().join(".");
  const handleCheck = () => {};
  const [showAdd, setShowAdd] = useState(false);

  return (
    <ListGroup.Item>
      <Card
        border="primary"
        style={{ width: "18rem" }}
        onMouseEnter={() => setShowAdd(true)}
        onMouseLeave={() => setShowAdd(false)}
      >
        {" "}
        <Card.Header>
          {name} due: {convertedDate}
        </Card.Header>
        <Card.Body>
          <Card.Title>{description}</Card.Title>{" "}
          <Card.Text>{priority}</Card.Text>
          <InputGroup className="mb-3">
            <Form.Check
              type="checkbox"
              label="Mark done"
              onClick={handleCheck}
            />
            {/* {isDone.toString()} */}
          </InputGroup>
          <TaskControllers showAdd={showAdd} />
        </Card.Body>{" "}
      </Card>{" "}
    </ListGroup.Item>
  );
}
export default TaskCard;
