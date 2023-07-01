import styled from "@emotion/styled";
import { CgMenu, CgClose } from "react-icons/cg";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 120px;

  background-color: #fff;
`;

export const Container = styled.section`
  width: 1536px;
  margin-right: auto;
  margin-left: auto;
`;

export const MenuButton = styled(CgMenu)`
  width: 48px;
`;

export const CloseButton = styled(CgClose)`
  width: 48px;
`;
