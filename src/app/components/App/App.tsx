import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import SingInPage from "pages/SignInPage";
import SingUpPage from "pages/SignUpPage";
import MyProfilePage from "pages/MyProfilePage";
import MyProductsPage from "pages/MyProductsPage";
import MyPurchasesPage from "pages/MyPurchasesPage";
import { MyAuctionsPage } from "pages/MyAuctionsPage";
import { Layout, PrivateRoute, PublicRoute } from "app";

import {} from "./App.styled";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/sign-in"
            element={
              <PublicRoute restricted redirectTo="/">
                <SingInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-up"
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
          <Route
            path="/my-profile"
            element={
              <PrivateRoute redirectTo="/sign-in">
                <MyProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-products"
            element={
              <PrivateRoute redirectTo="/sign-in">
                <MyProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-auctions"
            element={
              <PrivateRoute redirectTo="/sign-in">
                <MyAuctionsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-purchases"
            element={
              <PrivateRoute redirectTo="/sign-in">
                <MyPurchasesPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
