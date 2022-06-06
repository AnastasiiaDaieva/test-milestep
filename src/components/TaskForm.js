import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import s from "./TaskForm.module.css";
import { useState } from "react";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";

function TaskForm({ closeModal, setTasks }) {
  const priorityOptions = [
    {
      value: "critical",
      label: "Critical",
      number: 4,
    },
    {
      value: "important",
      label: "Important",
      number: 3,
    },
    {
      value: "normal",
      label: "Normal",
      number: 2,
    },
    { value: "low", label: "Low", number: 1 },
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { date, description, priority, title, isDone = false } = data;
    // const convertedDate = new Date(date)
    //   .toISOString()
    //   .substring(0, 10)
    //   .split("-")
    //   .reverse()
    //   .join(".");
    // console.log(convertedDate);
    const task = {
      name: title,
      dueDate: date,
      description: description,
      priority: {
        value: priority.value,
        label: priority.label,
        number: priority.number,
      },
      isDone: isDone,
    };
    axios
      .post("http://localhost:4000/api/tasks/", task)
      .then(() => setTasks((prevTasks) => [...prevTasks, task]))
      .catch((error) => console.log(error));
    closeModal();
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className={s.TaskForm}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            placeholder="Set the title"
            className={s.TaskForm__entry}
            {...register("title", {
              required: true,
            })}
          />{" "}
          {errors.title && <span>Fill the entry</span>}
        </Form.Group>

        <Form.Group className={`mb-3 ${s.TaskForm__group}`}>
          <Form.Control
            type="textarea"
            name="description"
            placeholder="Add description"
            className={s.TaskForm__entry}
            {...register("description", {
              required: true,
            })}
          />
          {errors.description && <span>Fill the entry</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Controller
            control={control}
            name="priority"
            {...register("priority", {
              required: true,
            })}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                options={priorityOptions}
                placeholder="Set the priority"
                className={s.TaskForm__entry}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />

          {errors.priority && <span>Fill the entry</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value } }) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                placeholderText="Set the due date"
                className={`${s.TaskForm__entry} ${s.TaskForm__datepicker}`}
              />
            )}
          />

          {errors.date && <span>Fill the entry</span>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default TaskForm;
