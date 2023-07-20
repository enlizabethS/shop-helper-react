import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import SingInPage from "pages/SignInPage";
import SingUpPage from "pages/SignUpPage";
import MyProfilePage from "pages/MyProfilePage";
import MyPurchasesPage from "pages/MyPurchasesPage";
import MyAuctionsPage from "pages/MyAuctionsPage";
import ProductsPage from "pages/ProductsPage";
import ProductCardPage from "pages/ProductCardPage";
import NotFoundPage from "pages/NotFoundPage";
import { Layout, PrivateRoute, PublicRoute } from "app";

import { Container } from "./App.styled";

export const App: React.FC = () => {
  return (
    <Container>
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
            path="/products"
            element={
              <PublicRoute>
                <ProductsPage />
              </PublicRoute>
            }
          >
            <Route path="/products/:productId" element={<ProductCardPage />} />
          </Route>
          <Route
            path="/my-profile"
            element={
              <PrivateRoute redirectTo="/sign-in">
                <MyProfilePage />
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
