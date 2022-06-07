import { Navigate } from "react-router-dom";

export function RequireAuth({ children, redirectTo, user }) {
  return user ? children : <Navigate to={redirectTo} />;
}

export function GeneralAccess({ children, user, redirectTo }) {
  return user ? <Navigate to={redirectTo} /> : children;
}
