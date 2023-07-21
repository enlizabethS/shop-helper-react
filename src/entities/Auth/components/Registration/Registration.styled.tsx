import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 40px;
`;

export const Title = styled.h2`
  font-size: 45px;
  padding-bottom: 20px;
  text-align: center;
`;

export const TextReg = styled.p`
  font-size: 20px;
  padding-bottom: 15px;
  text-align: center;
`;

export const TextErr = styled.div`
  font-size: 20px;
  padding-bottom: 15px;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
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
    border: 2px solid red;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 16px;
  color: red;
`;

export const ErrorReplacement = styled.div`
  height: 16px;
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
