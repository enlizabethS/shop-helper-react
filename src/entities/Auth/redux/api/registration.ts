import { api } from "app/redux";

interface IRegistrationRequest {
  username: string;
  email: string;
  password: string;
}

interface IRegistrationResponse {
  id: number;
  username: string;
  email: string;
}

const signUpApi = api.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<IRegistrationResponse, IRegistrationRequest>({
      query: ({ username, email, password }) => ({
        url: "/api/auth/sign-up",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username,
          email,
          password,
        },
      }),
      invalidatesTags: ["Auth"],
      transformResponse: (response: IRegistrationResponse) => response,
    }),
  }),
});

export const { useSignUpMutation } = signUpApi;
