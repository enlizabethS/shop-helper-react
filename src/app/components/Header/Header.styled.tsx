import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as shopHelperLogo } from "icons/shop-helper.svg";

const openingModal = keyframes`
  from {
    opacity: 0;
    scale: calc(0.7, 0.7);
  }  
  to {
    opacity: 1;
    scale: calc(1, 1);
  }
`;

export const HederContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
  padding: 15px 0;
`;

export const Logo = styled(shopHelperLogo)`
  width: 150px;
  height: 100px;
  margin: 0;
  fill: white;
`;

export const Title = styled.h1`
  color: #4f145e;
  font-size: 25px;
`;

export const AnimText = styled.div`
  position: absolute;
  font-size: 18px;

  color: rgba(226, 198, 198, 0.5);

  bottom: 0;

  animation: text-animation 15s linear infinite;

  @keyframes text-animation {
    0% {
      opacity: 1;
      transform: translateX(-20px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(20px);
    }
  }
`;

export const NotIsLogged = styled.div``;

export const AuthButton = styled(Link)`
  text-decoration: none;
  font-size: 20px;

  border-radius: 5px;
  padding: 5px;

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const IsLogged = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  font-size: 30px;

  margin-right: 12px;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  border: none;
  fill: #4f145e;

  :hover {
    background-color: #4f145e;
    fill: white;
  }

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const MenuModal = styled.div`
  position: absolute;
  z-index: 10;
  top: 18px;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: end;

  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);

  animation: ${openingModal} 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  overflow: auto;
`;

export const SVG = styled("svg")`
  width: 24px;
  height: 24px;
  /* fill: #4f145e; */
`;

export const ItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 18px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 20px;

  border-radius: 5px;

  :hover {
    background-color: #4f145e;
    color: white;
  }

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const LogOutButton = styled.button`
  font-family: inherit;
  font-size: 17px;
  color: #4f145e;

  border: none;
  border-radius: 5px;
  padding: 4px 12px;

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;
