import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";
import { CgSpinner } from "react-icons/cg";

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

// export const SpinnerCenterBox = styled.div`
//   display: flex;
//   justify-content: center;
//   color: ${props => props.theme.colors.blue.default};
//   width: 100%;
//   height: 100%;
// `;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
  /* width: 20px;
  height: 20px; */
`;

Spinner.defaultProps = {
  size: 30,
};
