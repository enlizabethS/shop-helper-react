import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import {
  useFetchCurrentUserQuery,
  saveCurrentUser,
  resetCurrentUser,
} from "entities/User";
import { useAppDispatch, useAppSelector, Modal } from "shared";

import { MenuButton, CloseButton, Title, HederContainer } from "./Header.styled";

export const HeaderEl = () => {
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
    <HederContainer>
      <Title>Shop-helper</Title>

      {!isLoggedIn && (
        <>
          <Link to={"/sign-in"}>Login</Link>
          <Link to={"/sign-up"}>Registration</Link>
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
          <button type="button" onClick={toggleMenuModal}>
            <CloseButton />
          </button>

          <span>{currentUser.username}</span>

          <Link to={"my-profile"} onClick={toggleMenuModal}>
            My profile
          </Link>

          <Link to={"my-products"} onClick={toggleMenuModal}>
            My products
          </Link>

          <Link to={"my-auctions"} onClick={toggleMenuModal}>
            My auctions
          </Link>

          <Link to={"my-purchases"} onClick={toggleMenuModal}>
            My purchases
          </Link>
        </Modal>
      )}
    </HederContainer>
  );
};
