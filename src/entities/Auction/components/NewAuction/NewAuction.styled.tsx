import styled from "@emotion/styled";

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProductsBlock = styled.div`
  position: relative;
`;

export const ProductBox = styled.div`
  display: flex;
`;

export const InputHidden = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  height: 300px;

  background-color: #fff;
  box-shadow: 0 8px 16px rgba(17, 17, 17, 0.3);

  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: #dce0f5;

    :active {
      background-color: #aeb1c2;
    }
  }
`;

export const Li = styled.li`
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 12px;
  }
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

export const ErrorMessage = styled.span`
  font-size: 16px;
  color: red;
`;

export const ButtonsBox = styled.div`
  display: flex;

  margin-bottom: 16px;
`;

export const SubmitButton = styled.button`
  height: 30px;
  padding: 0 16px;

  background-color: rgba(226, 198, 198, 0.5);
  color: #4f145e;

  border-color: #4f145e;
  border-radius: 7px;

  :not(:last-child) {
    margin-right: 16px;
  }

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
