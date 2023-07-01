import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignUpMutation, loginSuccess } from "entities/Auth";

import {} from "./Registration.styled";

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
      <h2>Registration</h2>

      {isError && <div>`Registration is not correct`</div>}

      <label>
        Username
        <input
          type="text"
          name="username"
          value={formState.username}
          placeholder="Username"
          onChange={handleFormChange}
        />
      </label>

      <label>
        Email
        <input
          type="text"
          name="email"
          value={formState.email}
          placeholder="Username"
          onChange={handleFormChange}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formState.password}
          placeholder="Password"
          onChange={handleFormChange}
        />
      </label>

      <label>
        Password Confirmation
        <input
          type="password"
          name="passwordConfirmation"
          value={formState.passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={handleFormChange}
        />
      </label>

      <button type="submit" disabled={handleSubmitButtonDisabled}>
        {isLoading ? <Spinner /> : "Registration"}
      </button>
    </form>
  );
};
