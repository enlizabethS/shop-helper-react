import styled from "@emotion/styled";

export const ProductsList = styled.ul`
  display: flex;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-right: 32px;
  }
`;
