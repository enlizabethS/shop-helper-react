import styled from "@emotion/styled";
import { CgMenu, CgClose } from "react-icons/cg";

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
export const HederContainer = styled.div`
margin:0;
margin-right: auto;
margin-left: auto;
width: 100%;
max-width: 1440px;
hight:500px;
color: white;
background-color: #4f145e;
padding: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-grow:1;
position: fixed; 
top:0;
z-index:1;
text-decoration: none;
// width:1450px;
}
`;

