import styled from "@emotion/styled";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

export const FieldsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  margin-bottom: 8px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FieldName = styled.span``;

export const FieldValue = styled.span`
  display: flex;
  align-items: center;

  width: 280px;
  height: 40px;

  padding: 0 8px;
  margin-left: 4px;

  color: #4f145e;
  background-color: rgba(226, 198, 198, 0.5);

  border: none;
  border-radius: 7px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  padding: 8px 0;

  :hover {
    background-color: #4f145e;
    color: white;
  }
`;
