import { Outlet } from "react-router-dom";
import { HeaderEl, ButtonsBoxEl, FooterEl } from "app";

import { Header, Container, Main, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderEl />
        </Container>
      </Header>

      <Main>
        <Container>
          <ButtonsBoxEl />
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
