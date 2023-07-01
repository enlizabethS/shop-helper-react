import { useState } from "react";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignInMutation, loginSuccess } from "entities/Auth";

import {} from "./Login.styled";

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
      dispatch(loginSuccess(loginRequest)); // диспатчим форму через authSlice в api
      setFormState(initialLoginState);
    } catch (error) {
      console.log("ERROR loginFormSubmit");
    }
  };

  const handleSubmitButtonDisabled =
    formState.username.length === 0 || formState.password.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {isError && <div>`Username or password is not correct`</div>}

      <label>
        Name
        <input
          type="text"
          name="username"
          value={formState.username}
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

      <button type="submit" disabled={handleSubmitButtonDisabled}>
        {isLoading ? <Spinner /> : "Login"}
      </button>
    </form>
  );
};
