import styled from "@emotion/styled";
import { ReactComponent as shopHelperLogo } from "icons/shop-helper.svg";
import { ReactComponent as shopHelperGit } from "icons/icon-github.svg";
import { ReactComponent as shopHelperInst } from "icons/icon-instagram.svg";
import { ReactComponent as shopHelperTelega } from "icons/icon-telegram.svg";

export const FooterContain = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;

  width: 100%;
  /* padding: 40px 0; */
`;

export const FirstBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  padding: 30px 0;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(shopHelperLogo)`
  width: 40px;
  height: 40px;
  margin-right: 24px;
`;

export const Title = styled.h2`
  color: #4f145e;
  font-size: 25px;
`;

export const SocialLinksBox = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 24px;
  }
`;

export const SVGGit = styled(shopHelperGit)`
  width: 50px;
  height: 50px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const SVGInst = styled(shopHelperInst)`
  width: 50px;
  height: 50px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const SVGTelega = styled(shopHelperTelega)`
  width: 50px;
  height: 50px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const SecondBlock = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* align-self: flex-end; */
`;

export const TextFooter = styled.div`
  /* text-align: center; */

  /* justify-content: center; */
  /* align-items: center; */
  /* align-self: flex-end; */

  font-size: 10px;
`;
