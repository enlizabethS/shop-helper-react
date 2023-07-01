import { Outlet } from "react-router-dom";
import { HeaderEl, FooterEl } from "app";

import { Header, Container, Body, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderEl />
        </Container>
      </Header>

      <Body>
        <Container>
          <Outlet />
        </Container>
      </Body>

      <Footer>
        <Container>
          <FooterEl />
        </Container>
      </Footer>
    </>
  );
};
