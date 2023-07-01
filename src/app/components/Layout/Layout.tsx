import { Outlet } from "react-router-dom";
import { Header } from "app";

import { Container, Body, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <Body>
        <Container>
          <Outlet />
        </Container>
      </Body>

      <Footer>
        <Container>
          <h1>Footer</h1>
        </Container>
      </Footer>
    </>
  );
};
