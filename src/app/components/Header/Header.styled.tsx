import styled from "@emotion/styled";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

export const MenuButton = styled(CgMenu)`
  width: 48px;
  color: #4f145e;
`;

export const CloseButton = styled(CgClose)`
  width: 48px;
  background-color: white;
  color: #4f145e;
`;

export const Title = styled.h1`
  color: white;

`;

export const Logo = styled.img`
width: 150px;
hight: 140px
border-radius: 10px;
border:n one;
z-index: 2;
`;

export const IsLogged = styled.div``;

export const UserName = styled.span`
font-size: 30px;

padding: 9px;

`;

export const LogOutButton = styled.button`
font-family: 'Josefin Sans', sans-serif;
font-size: 19px;

border: none;
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

export const Menu = styled.button`
font-family: 'Josefin Sans', sans-serif;
font-size: 19px;


border: none;
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
  padding: 30px 0;
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
