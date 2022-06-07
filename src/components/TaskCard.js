import { Card, InputGroup } from "react-bootstrap";
import { useState } from "react";
import s from "./TaskCard.module.css";
import axios from "axios";

function TaskCard({ id, name, description, priority, isDone, dueDate }) {
  const [done, setDone] = useState(isDone);
  const getDate = new Date(dueDate).toISOString().substring(0, 10);
  const convertedDate = getDate.split("-").reverse().join(".");
  const handleCheck = () => {
    setDone(!isDone);
    axios
      // .patch(`http://localhost:4000/api/tasks/${id}/done`, { isDone: !isDone })
      .patch(`/tasks/${id}/done`, { isDone: !isDone })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  console.log(done);

  return (
    <div className={s.TaskCard}>
      <Card border="primary" style={{ width: "18rem" }}>
        {" "}
        <Card.Header className={s.TaskCard__heading}>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{description}</Card.Title>{" "}
          <Card.Text>{priority}</Card.Text>{" "}
          <Card.Text> Due: {convertedDate}</Card.Text>
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            label="Done"
            checked={isDone}
            onChange={handleCheck}
          />
        </Card.Body>{" "}
      </Card>{" "}
    </div>
  );
}
export default TaskCard;
