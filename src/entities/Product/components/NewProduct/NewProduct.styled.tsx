import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 380px;
  height: 40px;

  color: #4f145e;
  background-color: rgba(226, 198, 198, 0.5);

  padding: 0 8px;
  border: none;
  border-radius: 7px;
  outline-color: #4f145e;

  :invalid {
    outline-color: red;
  }
`;

export const ImageBox = styled.div``;

export const ImagePicker = styled.input``;

export const DeleteImage = styled.button``;

export const ErrorMessage = styled.span`
  font-size: 16px;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 30px;
  margin-bottom: 16px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  :hover {
    color: white;
    background-color: #4f145e;
  }

  :disabled {
    color: #be98c8;

    background-color: rgba(205, 199, 199, 0.5);
    border-color: #be98c8;

    cursor: not-allowed;
  }
`;
