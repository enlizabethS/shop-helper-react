import { useState } from "react";
import { useSignOutMutation, logoutSuccess } from "entities/Auth";
import { resetCurrentUser, resetAddress } from "entities/User";
import {
  useLazyFetchProductsCurrentUserQuery,
  saveProducts,
} from "entities/Product";
import { useAppDispatch, useAppSelector } from "shared";
import icons from "icons/svgSprite.svg";

import {
  HeaderContainer,
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
} from "./HeaderEl.styled";

export const HeaderEl = () => {
  const dispatch = useAppDispatch();
  const [findProducts] = useLazyFetchProductsCurrentUserQuery();
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

  const handleMyProducts: React.MouseEventHandler<
    HTMLAnchorElement
  > = async () => {
    const foundProducts = await findProducts(null).unwrap();
    dispatch(saveProducts(foundProducts));

    setShowMenuModal(!showMenuModal);
  };

  const toggleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  return (
    <HeaderContainer>
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

                <MenuItem to={"products"} onClick={handleMyProducts}>
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
    </HeaderContainer>
  );
};
