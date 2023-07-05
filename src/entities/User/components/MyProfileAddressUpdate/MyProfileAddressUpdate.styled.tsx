import styled from "@emotion/styled";

export const Form = styled.form`
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

export const Label = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  font-size: inherit;

  display: flex;
  justify-content: center;
  /* align-items: center; */

  width: 280px;
  height: 40px;

  padding: 0 8px;
  margin-left: 4px;

  color: #4f145e;
  background-color: rgba(226, 198, 198, 0.5);

  border: none;
  border-radius: 7px;
  outline-color: #4f145e;
`;

export const ButtonsBlock = styled.div``;

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

  :not(:last-child) {
    margin-right: 12px;
  }
`;
