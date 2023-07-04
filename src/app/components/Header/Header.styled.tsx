import styled from "@emotion/styled";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ReactComponent as shopHelperLogo } from "icons/shop-helper.svg";

export const MenuButton = styled(CgMenu)`
  width: 28px;
  color: #4f145e;
`;

export const CloseButton = styled(CgClose)`
  width: 28px;
  // background-color: #4f145e;
  // color: #fff;
  // border: none;
`;

export const CrossButton = styled.button`
font-family: 'Josefin Sans', sans-serif;
font-size: 17px;
color:#4f145e;

border: none;
border-radius: 5px;
padding: 4px;

:not(:last-child) {
  margin-right: 12px;
}

:hover{
  background-color: #4f145e;
  color: white;
}
`;

export const Title = styled.h1`
  color: #4f145e;
  font-size: 25px;
`;
export const Logo = styled(shopHelperLogo)`
  width: 150px;
  height: 100px;
  margin: 0;
  fill: white;
`;

export const IsLogged = styled.div``;

export const UserName = styled.span`
font-size: 30px;

padding: 9px;

`;

export const LogOutButton = styled.button`
font-family: 'Josefin Sans', sans-serif;
font-size: 17px;
color:#4f145e;

border: none;
border-radius: 5px;
padding: 4px;

:not(:last-child) {
  margin-right: 12px;
}

:hover{
  background-color: rgba(226, 198, 198, 0.50);
  color: white;
}
`;

export const Menu = styled.button`
font-family: 'Josefin Sans', sans-serif;
font-size: 17px;


border: none;
border-radius: 5px;
padding: 1px;

:not(:last-child) {
  margin-right: 12px;
}

:hover{
  background-color: rgba(226, 198, 198, 0.50);
  color: white;
}
`;

export const AuthButton = styled(Link)`
  text-decoration: none;
  font-size: 20px;

  border-radius: 5px;
  padding: 5px;

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover{
    background-color: rgba(226, 198, 198, 0.50);
    color: white;
  }

`;

export const NotIsLogged = styled.div``;

export const HederContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
  padding: 15px 0;
`;


export const AnimText = styled.div`
font-size: 18px;

color: rgba(226, 198, 198, 0.50);

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

export const MenuItems = styled(Link)`
text-decoration: none;
  font-size: 20px;

  border-radius: 5px;
  padding: 4px;

  :hover{
    background-color: #4f145e;;
    color: white;
  }
`;
