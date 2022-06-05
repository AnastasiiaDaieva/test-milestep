import { useState, useEffect } from "react";
import SignoutButton from "./SignoutButton";
import useLocalStorage from "helpers/hooks/useLocalStorage";

function Header() {
  const [token, setToken] = useLocalStorage("token", "");
  useEffect(() => {
    window.localStorage.setItem("token", JSON.stringify(token));
  });

  return <div>{token !== "" && <SignoutButton setToken={setToken} />}</div>;
}

export default Header;
