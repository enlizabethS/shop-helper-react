import { ReactNode } from "react";
import { useAppSelector } from "shared";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: ReactNode;
  redirectTo: string;
}

export function PrivateRoute({ children, redirectTo = "/" }: IPrivateRoute) {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to={redirectTo} />}</>;
}
