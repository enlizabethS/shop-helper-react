import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppNavigate, Spinner } from "shared";
import { useSignInMutation, loginSuccess } from "entities/Auth";
import {
  useLazyFetchCurrentUserQuery,
  useLazyFetchAddressByIdQuery,
  saveCurrentUser,
  saveAddress,
} from "entities/User";

import {
  Container,
  Title,
  TextLog,
  TextErr,
  Form,
  Label,
  Input,
  ErrorMessage,
  ErrorReplacement,
  SubmitButton,
} from "./Login.styled";

interface ILogState {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    reset,
  } = useForm<ILogState>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const [login, { isLoading, isError }] = useSignInMutation();
  const [getCurrentUser] = useLazyFetchCurrentUserQuery();
  const [getAddress] = useLazyFetchAddressByIdQuery();

  const handleSubmitButtonDisabled =
    dirtyFields.username === undefined || dirtyFields.password === undefined;

  const handleSignInSubmit: SubmitHandler<ILogState> = async data => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    try {
      const loginResponse = await login(formData);
      navigate("/");
      dispatch(loginSuccess(loginResponse));

      const user = await getCurrentUser(null).unwrap();
      dispatch(saveCurrentUser(user));

      if (user.addressId !== null) {
        const address = await getAddress(user.addressId).unwrap();
        dispatch(saveAddress(address));
      }

      reset();
    } catch (error) {
      console.log("ERROR loginFormSubmit");
    }
  };

  return (
    <Container>
      <Title>LogIn</Title>
      <TextLog>Please, enter your username and password</TextLog>

      <Form onSubmit={handleSubmit(handleSignInSubmit)}>
        {isError && <TextErr>`Username or password is not correct`</TextErr>}

        <Label>
          <Input
            {...register("username", {
              required: "You did not enter a username",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            placeholder="Username"
            aria-invalid={errors.username ? true : false}
          />

          {errors.username ? (
            <ErrorMessage role="alert">
              {errors.username.message || "Error!"}
            </ErrorMessage>
          ) : (
            <ErrorReplacement />
          )}
        </Label>

        <Label>
          <Input
            type="password"
            {...register("password", {
              required: "You did not enter a password",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
            placeholder="Password"
            aria-invalid={errors.password ? true : false}
          />

          {errors.password ? (
            <ErrorMessage role="alert">
              {errors.password.message || "Error!"}
            </ErrorMessage>
          ) : (
            <ErrorReplacement />
          )}
        </Label>

        <SubmitButton type="submit" disabled={handleSubmitButtonDisabled}>
          {isLoading ? <Spinner /> : "Login"}
        </SubmitButton>
      </Form>

      <TextLog>
        If you haven't signed up yet, please don't miss out on this great
        bargain and join us.
      </TextLog>
    </Container>
  );
};
