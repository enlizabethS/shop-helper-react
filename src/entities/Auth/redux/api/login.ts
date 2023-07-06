import { api } from "app/redux";

interface ILoginRequest {
  username: string;
  password: string;
}

interface ILoginResponse {
  message: string;
  status: number;
}

const signInApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<ILoginResponse, ILoginRequest>({
      query: user => ({
        url: "/api/auth/sign-in",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          username: `${user.username}`,
          password: `${user.password}`,
        }),
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignInMutation } = signInApi;
