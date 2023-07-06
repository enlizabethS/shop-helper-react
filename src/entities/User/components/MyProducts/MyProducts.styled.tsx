import styled from "@emotion/styled";

export const ProductsList = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

overflow: hidden;
padding: 15px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-right: 32px;
  }
`;
