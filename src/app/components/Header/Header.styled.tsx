import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as shopHelperLogo } from "icons/shop-helper.svg";
import { Modal } from "shared";

export const HederContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
  padding: 15px 0;
`;

export const MenuModal = styled(Modal)`
  /* position: absolute;
  bottom: 0;
  right: 0; */
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
  font-size: 18px;

  color: rgba(226, 198, 198, 0.5);

  position: absolute;
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

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    fill: white;
  }
`;

export const SVG = styled("svg")`
  width: 24px;
  height: 24px;
`;

export const MenuItems = styled(Link)`
  text-decoration: none;
  font-size: 20px;

  border-radius: 5px;
  padding: 4px;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;

export const LogOutButton = styled.button`
  font-family: "Josefin Sans", sans-serif;
  font-size: 17px;
  color: #4f145e;

  border: none;
  border-radius: 5px;
  padding: 4px;

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;
