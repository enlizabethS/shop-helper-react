import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding-top: 4px;
`;

export const HomeButton = styled(Link)`
  width: 200px;
  height: 30px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;
  text-align: center;

  border-color: #4f145e;
  border-radius: 7px;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;

export const Box = styled.div`
  width: 412px;
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  :hover {
    background-color: #4f145e;
    color: white;
  }

  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const FilterForm = styled.form``;

export const FilterInput = styled.input`
  height: 30px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;
  border-color: transparent;

  border-radius: 7px;

  :focus {
    border-color: #4f145e;
  }
`;

export const FilterButton = styled.button`
  height: 30px;
  padding-right: 8px;
  padding-left: 8px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;
