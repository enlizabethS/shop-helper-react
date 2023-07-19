import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonsBox = styled.div`
  display: flex;
`;

export const HomeButton = styled(Link)`
  width: 200px;
  height: 30px;
  margin: 5px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  padding: 5px;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  margin: 5px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  padding: 5px;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;
