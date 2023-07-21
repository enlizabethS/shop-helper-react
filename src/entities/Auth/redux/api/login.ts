import { api } from "app/redux";

interface ILoginResponse {
  message: string;
  status: number;
}

const signInApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<ILoginResponse, FormData>({
      query: signInForm => ({
        url: "/api/auth/sign-in",
        method: "POST",
        body: signInForm,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignInMutation } = signInApi;
