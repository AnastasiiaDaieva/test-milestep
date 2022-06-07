import SignupForm from "components/SignupForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import s from "./SigninView.module.css";

function SignupView() {
  return (
    <>
      <Button>
        <Link to="/login" className={s.SigninView__link}>
          Already have an account? You can sign in here!
        </Link>
      </Button>{" "}
      <SignupForm />
    </>
  );
}

export default SignupView;
