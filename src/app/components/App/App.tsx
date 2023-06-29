import { Routes, Route } from "react-router-dom";
import { SingInPage, SingUpPage, HomePage } from "pages";
import { Layout, PrivateRoute, PublicRoute } from "app";

import {} from "./App.styled";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/sing-in"
            element={
              <PublicRoute restricted redirectTo="/">
                <SingInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/sing-up"
            element={
              <PublicRoute restricted redirectTo="/">
                <SingUpPage />
              </PublicRoute>
            }
          />
          <Route
            index
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
