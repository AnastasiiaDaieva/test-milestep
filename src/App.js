import s from "./App.module.scss";
import LoginForm from "components/LoginForm";
import { Container, Spinner } from "react-bootstrap";
import SignupForm from "components/SignupForm";
import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import { GeneralAccess, RequireAuth } from "helpers/checkRoutes";

import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
const HomePageView = lazy(() =>
  import("views/HomePageView" /*webpackChunkName: "home-view" */)
);
const SigninView = lazy(() =>
  import("views/SigninView" /*webpackChunkName: "login-view" */)
);

const SignupView = lazy(() =>
  import("views/SignupView" /*webpackChunkName: "signup-view" */)
);

axios.defaults.baseURL = `https://milestep-test-backend.herokuapp.com/api`;

function App() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const checkToken = window.localStorage.getItem("token");

    if (checkToken) {
      const foundUser = JSON.parse(checkToken);
      setCurrentUser(foundUser);
    }
  }, []);

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      >
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth redirectTo="/login" user={currentUser}>
                <HomePageView />
              </RequireAuth>
            }
          />

          <Route
            path="/signup"
            element={
              <GeneralAccess redirectTo="/*" user={currentUser}>
                <SignupView />
              </GeneralAccess>
            }
          />
          <Route
            path="/login"
            element={
              <GeneralAccess redirectTo="/*" user={currentUser}>
                <SigninView />
              </GeneralAccess>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
