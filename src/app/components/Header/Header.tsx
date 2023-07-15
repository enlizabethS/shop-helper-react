import { useState } from "react";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import { resetCurrentUser, resetAddress } from "entities/User";
import { useAppDispatch, useAppSelector } from "shared";
import icons from "icons/svgSprite.svg";

import {
  HederContainer,
  Logo,
  Title,
  AnimText,
  NotIsLogged,
  AuthButton,
  IsLogged,
  UserName,
  Button,
  MenuModal,
  SVG,
  ItemsBlock,
  MenuItem,
  LogOutButton,
} from "./Header.styled";

export const HeaderEl = () => {
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const currentUser = useAppSelector(state => state.users.currentUser);
  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleSignOut: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const signOutReq = await signOut(null).unwrap();
      dispatch(logoutSuccess(signOutReq));
      toggleMenuModal();
    } catch (error) {
      console.log("ERROR signOut");
    }

    dispatch(resetCurrentUser());
    dispatch(resetAddress());
  };

  const toggleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  return (
    <HederContainer>
      <Logo />

      {!isLoggedIn && (
        <>
          <Title>
            Be a Winner! Buy our products at auction for unbeatable prices!
          </Title>

          <NotIsLogged>
            <AuthButton to={"/sign-in"}>LogIn</AuthButton>
            <AuthButton to={"/sign-up"}>Registration</AuthButton>
          </NotIsLogged>
        </>
      )}

      {isLoggedIn && (
        <>
          <Title>Hello! It seems like the time has come for victory</Title>

          <IsLogged>
            <UserName>{currentUser.username}</UserName>

            <Button type="button" onClick={toggleMenuModal}>
              <SVG>
                <use href={`${icons}#menu`} />
              </SVG>
            </Button>
          </IsLogged>

          {showMenuModal && (
            <MenuModal>
              <Button type="button" onClick={toggleMenuModal}>
                <SVG>
                  <use href={`${icons}#cross`} />
                </SVG>
              </Button>

              <ItemsBlock>
                <MenuItem to={"my-profile"} onClick={toggleMenuModal}>
                  My profile
                </MenuItem>

                <MenuItem to={"my-products"} onClick={toggleMenuModal}>
                  My products
                </MenuItem>

                <MenuItem to={"my-auctions"} onClick={toggleMenuModal}>
                  My auctions
                </MenuItem>

                <MenuItem to={"my-purchases"} onClick={toggleMenuModal}>
                  My purchases
                </MenuItem>
              </ItemsBlock>

              <LogOutButton type="button" onClick={handleSignOut}>
                LogOut
              </LogOutButton>
            </MenuModal>
          )}
        </>
      )}

      <AnimText>{"Sale ".repeat(34)}</AnimText>
    </HederContainer>
  );
};
