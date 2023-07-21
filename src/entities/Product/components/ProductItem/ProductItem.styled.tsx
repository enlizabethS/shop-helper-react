import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;

  :not(:last-child) {
    margin-right: 32px;
  }
`;

export const PrewImage = styled.img`
  width: 75px;
  height: 75px;
`;
