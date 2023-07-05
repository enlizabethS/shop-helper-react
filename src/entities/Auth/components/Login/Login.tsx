import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignInMutation, loginSuccess } from "entities/Auth";

import {
  Title,
  TextLog,
  LoginContainer,
  Label,
  Input,
  SubmitButLog,
} from "./Login.styled";

const initialLoginState = {
  username: "",
  password: "",
};

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const [login, { isLoading, isError }] = useSignInMutation();
  const [formState, setFormState] = useState(initialLoginState);

  const handleFormChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const loginRequest = await login(formState).unwrap();
      navigate("/");
      dispatch(loginSuccess(loginRequest));
      setFormState(initialLoginState);
    } catch (error) {
      console.log("ERROR loginFormSubmit");
    }
  };

  const handleSubmitButtonDisabled =
    formState.username.length === 0 || formState.password.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <Title>LogIn</Title>
      <TextLog>Please, enter your username and password</TextLog>
      <LoginContainer>
        {isError && <div>`Username or password is not correct`</div>}

        <Label>
          <Input
            type="text"
            name="username"
            value={formState.username}
            placeholder="Username"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <Input
            type="password"
            name="password"
            value={formState.password}
            placeholder="Password"
            onChange={handleFormChange}
          />
        </Label>

        <SubmitButLog type="submit" disabled={handleSubmitButtonDisabled}>
          {isLoading ? <Spinner /> : "Login"}
        </SubmitButLog>
      </LoginContainer>
      <TextLog>
        If you haven't signed up yet, please don't miss out on this great
        bargain and join us.
      </TextLog>
    </form>
  );
};
