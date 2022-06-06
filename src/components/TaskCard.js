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
import s from "./TaskCard.module.css";

function TaskCard({ name, description, priority, dueDate }) {
  const getDate = new Date(dueDate).toISOString().substring(0, 10);
  const convertedDate = getDate.split("-").reverse().join(".");
  const handleCheck = () => {};

  return (
    <div className={s.TaskCard}>
      <Card border="primary" style={{ width: "18rem" }}>
        {" "}
        <Card.Header className={s.TaskCard__heading}>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{description}</Card.Title>{" "}
          <Card.Text>{priority}</Card.Text>{" "}
          <Card.Text> Due: {convertedDate}</Card.Text>
        </Card.Body>{" "}
      </Card>{" "}
    </div>
  );
}
export default TaskCard;
