import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import s from "components/LoginForm.module.css";

function LoginForm() {
  return (
    <div className={s.LoginForm__container}>
      {" "}
      <Container>
        <Form>
          <h2>Sign in</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
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
