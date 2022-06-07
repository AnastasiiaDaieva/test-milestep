import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password, username } = data;
    axios
      // .post("http://localhost:4000/api/users/signup", {
      //   email,
      //   password,
      //   username,
      // })
      .post("/users/signup", {
        email,
        password,
        username,
      })
      .then((res) =>
        window.localStorage.setItem("token", JSON.stringify(res.data.token))
      )
      .catch((error) => console.log(error))
      .finally((res) => console.log(res));
    reset();
  };
  return (
    <div>
      <Container>
        <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign up</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
              })}
            />{" "}
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
          </Form.Group>{" "}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter name"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && <span>Fill the entry</span>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>{" "}
      </Container>
    </div>
  );
}

export default SignupForm;
