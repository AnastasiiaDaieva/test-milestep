import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import s from "components/LoginForm.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginForm({}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    axios
      // .post("http://localhost:4000/api/users/signin", { email, password })
      .post("/users/signin", { email, password })
      .then((res) => {
        console.log(res.data);

        window.localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((error) => console.log(error));
    reset();
  };
  return (
    <div className={s.LoginForm__container}>
      {" "}
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign in</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <span>Fill the entry</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />{" "}
            {errors.password && <span>Fill the entry</span>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm;
