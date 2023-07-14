import styled from "@emotion/styled";
import { ReactComponent as shopHelperLogo } from "icons/shop-helper.svg";
import { ReactComponent as shopHelperGit } from "icons/icon-github.svg";
import { ReactComponent as shopHelperInst } from "icons/icon-instagram.svg";
import { ReactComponent as shopHelperTelega } from "icons/icon-telegram.svg";

export const FooterContain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 40%;

  position: relative;
  width: 100%;
  padding: 20px 50px;
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

export const SVGGit = styled(shopHelperGit)`
  width: 50px;
  height: 50px;
  padding: 8px;
  margin: 0 5px 0 5px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const SVGInst = styled(shopHelperInst)`
  width: 50px;
  height: 50px;
  padding: 8px;
  margin: 0 5px 0 5px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const SVGTelega = styled(shopHelperTelega)`
  width: 50px;
  height: 50px;

  padding: 8px;
  margin: 0 5px 0 5px;

  border-radius: 7px;

  :hover {
    background-color: rgba(226, 198, 198, 0.5);
    color: white;
  }
`;

export const TextContain = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const TextFooter = styled.div`
  text-align: center;

  justify-content: center;
  align-items: center;
  align-self: flex-end;

  margin-right: 250px;
  font-size: 10px;
`;
