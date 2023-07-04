import styled from "@emotion/styled";

export const Title = styled.h2`
font-size: 45px;
padding: 30px;
text-align: center;
`;

export const TextReg = styled.p`
font-size: 20px;
padding: 10px 0 10px 0;
text-align: center;
`;

export const Text = styled.p`
font-size: 20px;
padding: 15px 0 15px 0;
text-align: left;
`;

export const TextErr = styled.div`
font-size: 20px;
padding: 15px 0 15px 0;
text-align: left;
`;

export const RegistrConteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 15px;
`;

export const UserNameReg = styled.label`
padding: 7px;
`;

export const UserNameInputReg = styled.input`
width: 380px;
height: 40px;

color: #4f145e;
background-color: rgba(226, 198, 198, 0.50);

border: none;
border-radius: 7px;
`;

export const EmailReg = styled.label`
padding: 7px;
`;

export const EmailInputReg = styled.input`
width: 380px;
height: 40px;

color: #4f145e;
background-color: rgba(226, 198, 198, 0.50);

border: none;
border-radius: 7px;
`;

export const PasswordReg = styled.label`
padding: 7px;
`;

export const PasswordInputReg = styled.input`
width: 380px;
height: 40px;

color: #4f145e;
background-color: rgba(226, 198, 198, 0.50);

border: none;
border-radius: 7px;
`;
 
export const PasswordConfReg = styled.label`
padding: 7px;
`;

export const PasswordConfInputReg = styled.input`
width: 380px;
height: 40px;

color: #4f145e;
background-color: rgba(226, 198, 198, 0.50);

border: none;
border-radius: 7px;
`;

export const SubmitButRegistr = styled.button`
width: 200px;
height: 30px;
margin: 5px;

background-color: rgba(226, 198, 198, 0.50);
color: #4f145e; 

border-color: #4f145e; 
border-radius: 7px;

padding: 5px;

:hover{
    background-color: #4f145e;
    color: white;
  }
`;