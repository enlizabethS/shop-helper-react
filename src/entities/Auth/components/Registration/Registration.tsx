import { SubmitHandler, useForm } from "react-hook-form";
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
  Container,
  Title,
  TextReg,
  TextErr,
  Form,
  Label,
  Input,
  ErrorMessage,
  ErrorReplacement,
  SubmitButton,
} from "./Registration.styled";

interface IRegState {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    getValues,
    reset,
  } = useForm<IRegState>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const [signUp, { isLoading, isError }] = useSignUpMutation();
  const [login] = useSignInMutation();
  const [getCurrentUser] = useLazyFetchCurrentUserQuery();
  const [getAddress] = useLazyFetchAddressByIdQuery();

  const handleSignUpSubmit: SubmitHandler<IRegState> = async data => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    try {
      await signUp(data);

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
      console.log("ERROR registrationFormSubmit");
    }
  };

  const handleSubmitButtonDisabled =
    dirtyFields.email === undefined ||
    dirtyFields.username === undefined ||
    dirtyFields.password === undefined ||
    dirtyFields.passwordConfirmation === undefined;

  return (
    <Container>
      <Title>Registration</Title>
      <TextReg>
        By creating an account you agree to our Terms of Use and Privacy Policy
      </TextReg>

      <Form onSubmit={handleSubmit(handleSignUpSubmit)}>
        {isError && <TextErr>`Registration is not correct`</TextErr>}

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
            type="email"
            {...register("email", {
              required: "You did not enter a email",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            placeholder="Email"
            aria-invalid={errors.email ? true : false}
          />

          {errors.email ? (
            <ErrorMessage role="alert">
              {errors.email.message || "Error!"}
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

        <Label>
          <Input
            type="password"
            {...register("passwordConfirmation", {
              required: "Password not confirmed",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
              validate: () =>
                getValues("password") === getValues("passwordConfirmation"),
            })}
            placeholder="Password confirmation"
            aria-invalid={errors.passwordConfirmation ? true : false}
          />

          {errors.passwordConfirmation ? (
            <ErrorMessage>Password not confirmed</ErrorMessage>
          ) : (
            <ErrorReplacement />
          )}
        </Label>

        <SubmitButton type="submit" disabled={handleSubmitButtonDisabled}>
          {isLoading ? <Spinner /> : "Registration"}
        </SubmitButton>
      </Form>
    </Container>
  );
};
