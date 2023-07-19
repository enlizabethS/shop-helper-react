import { Outlet } from "react-router-dom";
import { HeaderEl, ButtonsBoxEl, FooterEl } from "app";

import { Header, Container, Main, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderEl />
          <ButtonsBoxEl />
        </Container>
      </Header>

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Footer>
        <Container>
          <FooterEl />
        </Container>
      </Footer>
    </>
  );
};
