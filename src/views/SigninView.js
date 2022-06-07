import LoginForm from "components/LoginForm";
import s from "./SigninView.module.css";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function SigninView({}) {
  return (
    <>
      <Button>
        <Link to="/signup" className={s.SigninView__link}>
          No account? You can sign up here!
        </Link>
      </Button>
      <LoginForm />
    </>
  );
}

export default SigninView;
