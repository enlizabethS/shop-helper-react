import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import {
  useFetchCurrentUserQuery,
  saveCurrentUser,
  resetCurrentUser,
} from "entities/User";
import { useAppDispatch, useAppSelector, Modal } from "shared";

import { Header, Container, MenuButton, Body, Footer } from "./Layout.styled";

export const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const currentUser = useAppSelector(state => state.users.currentUser);
  const { data } = useFetchCurrentUserQuery(null, {
    skip: !isLoggedIn,
  });
  const [showMenuModal, setShowMenuModal] = useState(false);

  useEffect(() => {
    if (data !== undefined) {
      dispatch(saveCurrentUser(data));
    }
  }, [dispatch, data]);

  const handleSignOut: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const signOutReq = await signOut(null).unwrap();
      dispatch(logoutSuccess(signOutReq));
      dispatch(resetCurrentUser());
    } catch (error) {
      console.log("ERROR signOut");
    }
  };

  const toggleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  return (
    <>
      <Header>
        <Container>
          <h1>Header</h1>

          {!isLoggedIn && (
            <>
              <Link to={"/sing-in"}>Login</Link>
              <Link to={"/sing-up"}>Registration</Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <span>{currentUser.username}</span>
              <button type="button" onClick={handleSignOut}>
                LogOut
              </button>
              <button type="button" onClick={toggleMenuModal}>
                <MenuButton />
              </button>
            </>
          )}

          {showMenuModal && (
            <Modal width="460px" height="752px" onClose={toggleMenuModal}>
              <span>{currentUser.username}</span>
              <button type="button" disabled={currentUser.productsId === null}>
                <Link to="">My products</Link>
              </button>
            </Modal>
          )}
        </Container>
      </Header>

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
