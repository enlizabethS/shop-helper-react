import { Outlet, Link } from "react-router-dom";
import { useAppSelector } from "shared";

import { Header, Body, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header>
        <h1>Header</h1>

        {!isLoggedIn && (
          <>
            <Link to={"/sing-in"}>Login</Link>
            <Link to={"/sing-up"}>Registration</Link>
          </>
        )}
      </Header>

      <Body>
        <Outlet />
      </Body>

      <Footer>
        <h1>Footer</h1>
      </Footer>
    </>
  );
};
