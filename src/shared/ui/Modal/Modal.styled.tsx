import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const openingBackdrop = keyframes`
  from {opacity: 0}  
  to {opacity: 1}
`;

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

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  /* backdrop-filter: blur(1px); */
  animation: ${openingBackdrop} 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Content = styled.div`
  position: absolute;
  top:18%;
  left: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  transform: translate(-30%, -30%);
  background-color: rgba(226, 198, 198, 0.50);
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.3);

  animation: ${openingModal} 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  overflow: hidden;
`;
