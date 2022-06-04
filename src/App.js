import s from "./App.module.scss";
import LoginForm from "components/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import st from "./components/LoginForm.module.css";
import SignupForm from "components/SignupForm";

function App() {
  return (
    <div className={s.App}>
      <div className={st.LoginForm__container}>
        {" "}
        <Container>
          <LoginForm className={st.LoginForm} />
        </Container>
      </div>
      <div>
        {" "}
        <Container>
          <SignupForm />
        </Container>
      </div>
    </div>
  );
}

export default App;
