import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import {
  useFetchCurrentUserQuery,
  useFetchAddressQuery,
  saveCurrentUser,
  saveAddress,
  resetCurrentUser,
} from "entities/User";
import { useAppDispatch, useAppSelector, Modal } from "shared";


import {
  IsLogged,
  AuthButton,
  NotIsLogged,
  MenuButton,
  CloseButton,
  Title,
  HederContainer,
  Logo,
  UserName,
  LogOutButton,
  Menu,
  AnimText,
  CrossButton,
  MenuItems
} from "./Header.styled";

export const HeaderEl = () => {
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const currentUser = useAppSelector(state => state.users.currentUser);
  const { data: userData } = useFetchCurrentUserQuery(null, {
    skip: !isLoggedIn,
  });
  const { data: addressData } = useFetchAddressQuery(currentUser.addressId, {
    skip: currentUser.addressId === null,
  });
  const [showMenuModal, setShowMenuModal] = useState(false);

  useEffect(() => {
    if (userData !== undefined) {
      dispatch(saveCurrentUser(userData));
    }
    if (addressData !== undefined) {
      dispatch(saveAddress(addressData));
    }
  }, [dispatch, userData, addressData]);

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

      <Logo></Logo>

      {!isLoggedIn &&(
        <Title>Be a Winner! Buy our products at auction for unbeatable prices!</Title>
      )}

      {isLoggedIn &&(
        <Title>Hello! It seems like the time has come for victory</Title>
      )}

      <AnimText>  Sale  Sale  Sale  Sale  Sale  Sale  Sale  Sale  Sale  
        Sale  Sale  Sale  Sale   Sale  Sale  Sale  Sale  Sale  Sale  Sale 
         Sale  Sale  Sale  Sale  Sale  Sale  Sale  Sale 
         Sale  Sale  Sale  Sale  Sale  </AnimText>

      {!isLoggedIn && (
        <NotIsLogged>
          <AuthButton to={"/sign-in"}>LogIn</AuthButton>
          <AuthButton to={"/sign-up"}>Registration</AuthButton>
        </NotIsLogged>
      )}

      {isLoggedIn && (
       <IsLogged>
          <UserName>{currentUser.username}</UserName>

          <LogOutButton type="button" onClick={handleSignOut}>
            LogOut
          </LogOutButton>

          <Menu type="button" onClick={toggleMenuModal}>
            <MenuButton />
          </Menu>
        </IsLogged>
      )}
      {showMenuModal && (
        <Modal width="190px" height="200px" onClose={toggleMenuModal}>
          <CrossButton  type="button" onClick={toggleMenuModal}>
            <CloseButton />
          </CrossButton>

          {/* <span>{currentUser.username}</span> */}

          <MenuItems to={"my-profile"} onClick={toggleMenuModal}>
            My profile
          </MenuItems>

          <MenuItems to={"my-products"} onClick={toggleMenuModal}>
            My products
          </MenuItems>

          <MenuItems to={"my-auctions"} onClick={toggleMenuModal}>
            My auctions
          </MenuItems>

          <MenuItems to={"my-purchases"} onClick={toggleMenuModal}>
            My purchases
          </MenuItems>
        </Modal>
      )}
    </HederContainer>
  );
};
