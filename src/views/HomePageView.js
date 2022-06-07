import { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, Spinner, Card } from "react-bootstrap";
import { MdDoneAll } from "react-icons/md";
import AddTaskButton from "components/AddTaskButton";
import SortingBar from "components/SortingBar";
import ModalBase from "components/ModalBase";
import TaskControllers from "components/TaskControllers";
import s from "./HomePageView.module.css";

function HomePageView() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [sortOption, setSortOption] = useState({
    value: "default",
    label: "Sort by",
  });
  // console.log(sortOption);

  // console.log(isOpen);
  const sortingOptions = [
    { value: "active", label: "Active first" },
    { value: "completed", label: "Completed first" },
    { value: "due date", label: "Due date" },
    { value: "priority", label: "Priority" },
  ];

  useEffect(() => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => {
        if (sortOption.value === "active") {
          return a.isDone - b.isDone;
        } else if (sortOption.value === "completed") {
          return b.isDone - a.isDone;
        } else if (sortOption.value === "due date") {
          return a.dueDate - b.dueDate;
        } else if (sortOption.value === "priority") {
          return b.priority.number - a.priority.number;
        } else {
          return prevTasks;
        }
      })
    );
  }, [sortOption.value]);

  // console.log("sorted", tasks);

  console.log(tasks);
  useEffect(() => {
    setIsLoading(true);
    axios
      // .get("http://localhost:4000/api/tasks/")
      .get("/tasks/")
      .then((res) => setTasks(res.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Container>
          {" "}
          <AddTaskButton setIsOpen={setIsOpen} />{" "}
          {isOpen && (
            <ModalBase
              setIsOpen={setIsOpen}
              type="createtask"
              setTasks={setTasks}
            />
          )}
          <SortingBar
            sortTasks={tasks}
            sortingOptions={sortingOptions}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />{" "}
          <MdDoneAll />
          <ListGroup gap={3} className={s.HomePageView__list}>
            {tasks !== undefined &&
              tasks.map(
                ({
                  _id,
                  name,
                  description,
                  priority: { label },
                  dueDate,
                  isDone,
                }) => (
                  <Card
                    key={_id}
                    onMouseEnter={() => setShowAdd(true)}
                    onMouseLeave={() => setShowAdd(false)}
                    className={s.HomePageView__item}
                    style={{ backgroundColor: isDone ? "grey" : "transparent" }}
                  >
                    {showCard && (
                      <ModalBase
                        id={_id}
                        name={name}
                        description={description}
                        priority={label}
                        dueDate={dueDate}
                        isDone={isDone}
                        type="showtask"
                        setShowCard={setShowCard}
                        setTasks={setTasks}
                      />
                    )}
                    <Card.Title
                      key={_id}
                      className={s.HomePageView__title}
                      onClick={() => setShowCard(true)}
                    >
                      {name}
                    </Card.Title>{" "}
                    <TaskControllers
                      showAdd={showAdd}
                      id={_id}
                      setTasks={setTasks}
                    />
                  </Card>
                )
              )}
          </ListGroup>
        </Container>
      )}
    </div>
  );
}

export default HomePageView;
