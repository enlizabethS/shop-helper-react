import { Outlet, Link } from "react-router-dom";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import { useAppDispatch, useAppSelector } from "shared";

import { Header, Body, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const handleSignOut: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const signOutReq = await signOut(null).unwrap();
      dispatch(logoutSuccess(signOutReq));
    } catch (error) {
      console.log("ERROR signOut");
    }
  };

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

        {isLoggedIn && (
          <>
            <button type="button" onClick={handleSignOut}>
              LogOut
            </button>
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
