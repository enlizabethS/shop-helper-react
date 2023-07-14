import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 15px;
`;

export const HomeButton = styled.button`
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

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  margin-bottom: 24px;
`;
