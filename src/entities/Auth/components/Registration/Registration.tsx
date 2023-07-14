import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import {
  useSignUpMutation,
  useSignInMutation,
  loginSuccess,
} from "entities/Auth";
import {
  useLazyFetchCurrentUserQuery,
  useLazyFetchAddressByIdQuery,
  saveCurrentUser,
  saveAddress,
} from "entities/User";

import {
  Title,
  RegistrContainer,
  TextReg,
  TextErr,
  Label,
  LabelText,
  Input,
  SubmitButRegistr,
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
  const [signUp, { isLoading: isLoadingSignUp, isError: isErrorSignUp }] =
    useSignUpMutation();
  const [login] = useSignInMutation();
  const [getCurrentUser] = useLazyFetchCurrentUserQuery();
  const [getAddress] = useLazyFetchAddressByIdQuery();
  const [formState, setFormState] = useState(initialRegistrationState);

  const handleFormChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      await signUp(formState).unwrap();
      const loginResponse = await login(formState).unwrap();

      navigate("/");
      dispatch(loginSuccess(loginResponse));

      const user = await getCurrentUser(null).unwrap();
      dispatch(saveCurrentUser(user));

      if (user.addressId !== null) {
        const address = await getAddress(user.addressId).unwrap();
        dispatch(saveAddress(address));
      }
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
      <TextReg>
        By creating an account you agree to our Terms of Use and Privacy Policy
      </TextReg>
      <RegistrContainer>
        {isErrorSignUp && <TextErr>`Registration is not correct`</TextErr>}

        <Label>
          <LabelText>Username</LabelText>
          <Input
            type="text"
            name="username"
            value={formState.username}
            placeholder="Username"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Email</LabelText>
          <Input
            type="text"
            name="email"
            value={formState.email}
            placeholder="Username"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Password</LabelText>
          <Input
            type="password"
            name="password"
            value={formState.password}
            placeholder="Password"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Password Confirmation</LabelText>
          <Input
            type="password"
            name="passwordConfirmation"
            value={formState.passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={handleFormChange}
          />
        </Label>

        <SubmitButRegistr type="submit" disabled={handleSubmitButtonDisabled}>
          {isLoadingSignUp ? <Spinner /> : "Registration"}
        </SubmitButRegistr>
      </RegistrContainer>
    </form>
  );
};
