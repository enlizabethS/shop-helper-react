import styled from "@emotion/styled";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

export const MenuButton = styled(CgMenu)`
  width: 48px;
  background-color: white;
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

export const IsLogged = styled.div``;

export const AuthButton = styled(Link)`
  text-decoration: none;

  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const NotIsLogged = styled.div``;

export const HederContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 0;
`;
