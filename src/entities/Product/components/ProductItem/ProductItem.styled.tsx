import styled from "@emotion/styled";

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-right: 32px;
  }
`;
