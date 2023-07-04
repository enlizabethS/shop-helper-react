import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignUpMutation, loginSuccess } from "entities/Auth";

import {
  Title,
  RegistrConteiner,
  TextReg,
  Text,
  UserNameReg,
  UserNameInputReg,
  EmailReg,
  EmailInputReg,
  PasswordReg,
  PasswordInputReg,
  PasswordConfReg,
  PasswordConfInputReg,
  SubmitButRegistr
} from "./Registration.styled";

interface IRegState {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const initialRegistrationState: IRegState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const [signUp, { isLoading, isError }] = useSignUpMutation();
  const [formState, setFormState] = useState(initialRegistrationState);

  const handleFormChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const registrationRequest = await signUp(formState).unwrap();
      navigate("/");
      dispatch(loginSuccess(registrationRequest)); // диспатчим форму через authSlice в api
      setFormState(initialRegistrationState);
    } catch (error) {
      console.log("ERROR registrationFormSubmit");
    }
  };

  const handleSubmitButtonDisabled =
    formState.password !== formState.passwordConfirmation ||
    formState.email.length === 0 ||
    formState.username.length === 0 ||
    formState.password.length === 0 ||
    formState.passwordConfirmation.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <Title>Registration</Title>
      <TextReg>By creating an account you agree to our Terms of Use and Privacy Policy</TextReg>
      <RegistrConteiner>
      {isError && <div>`Registration is not correct`</div>}

      <UserNameReg>
       <Text>Username</Text> 
        <UserNameInputReg
          type="text"
          name="username"
          value={formState.username}
          placeholder="Username"
          onChange={handleFormChange}
        />
      </UserNameReg>

      <EmailReg>
        <Text>Email</Text>
        <EmailInputReg 
          type="text"
          name="email"
          value={formState.email}
          placeholder="Username"
          onChange={handleFormChange}
        />
      </EmailReg>

      <PasswordReg>
       <Text>Password</Text> 
        <PasswordInputReg
          type="password"
          name="password"
          value={formState.password}
          placeholder="Password"
          onChange={handleFormChange}
        />
      </PasswordReg>

      <PasswordConfReg>
       <Text>Password Confirmation</Text> 
        <PasswordConfInputReg
          type="password"
          name="passwordConfirmation"
          value={formState.passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={handleFormChange}
        />
      </PasswordConfReg>

      <SubmitButRegistr type="submit" disabled={handleSubmitButtonDisabled}>
        {isLoading ? <Spinner /> : "Registration"}
      </SubmitButRegistr>
      </RegistrConteiner>
    </form>
  );
};
