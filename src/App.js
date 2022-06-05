import s from "./App.module.scss";
import LoginForm from "components/LoginForm";
import { Container, Spinner } from "react-bootstrap";
import SignupForm from "components/SignupForm";
import { Suspense, lazy, useEffect } from "react";
import axios from "axios";

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

// import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";

function App() {
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
          <Route path="/*" element={<HomePageView />} />

          <Route
            path="/signup"
            element={
              // <GeneralAccess redirectTo="/">

              <SignupView />
              // </GeneralAccess>
            }
          />
          <Route
            path="/login"
            element={
              // <GeneralAccess redirectTo="/">
              <SigninView />
              // </GeneralAccess>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
