import { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, Spinner, Stack } from "react-bootstrap";
import TaskCard from "components/TaskCard";
import { MdDoneAll } from "react-icons/md";
import AddTaskButton from "components/AddTaskButton";
import SortingBar from "components/SortingBar";

function HomePageView() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(tasks);
  useEffect(() => {
    setIsLoading(true);
    axios
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
          <AddTaskButton /> <SortingBar /> <MdDoneAll />
          <ListGroup gap={3}>
            {tasks.map(
              ({ _id, name, description, priority, dueDate, isDone }) => (
                <TaskCard
                  key={_id}
                  name={name}
                  description={description}
                  priority={priority}
                  dueDate={dueDate}
                  isDone={isDone}
                />
              )
            )}
          </ListGroup>
        </Container>
      )}
    </div>
  );
}

export default HomePageView;
