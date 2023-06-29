import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignUpMutation, loginSuccess } from "entities/Auth";

import {} from "./Registration.styled";

const initialRegistrationState = {
  username: "",
  email: "",
  password: "",
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

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
      <button type="submit">{isLoading ? <Spinner /> : "Login"}</button>
    </form>
  );
};
