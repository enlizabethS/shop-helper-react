import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 66px 0;
`;

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Josefin Sans", sans-serif;
  color: black;
  padding-bottom: 75px;
`;

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuSubtitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 27px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: black;
  padding-bottom: 17px;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PaymentLinks = styled.div`
  display: flex;
  width: 276px;
  justify-content: space-between;
`;

export const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: 4fr repeat(4, 1fr);
  width: 48%;
  align-items: end;
  justify-content: flex-end;
  column-gap: 37px;
`;

export const SocialLinkTitle = styled.h3`
  color: black;
  font-size: 32px;
  font-weight: 600;
`;
