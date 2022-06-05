import { Button } from "react-bootstrap";

function SignoutButton({ setToken }) {
  return (
    <div>
      <Button onClick={() => setToken("")}>Sign out</Button>
    </div>
  );
}

export default SignoutButton;
