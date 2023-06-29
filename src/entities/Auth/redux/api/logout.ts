import { api } from "app/redux";

const signOutApi = api.injectEndpoints({
  endpoints: builder => ({
    signOut: builder.mutation({
      query: () => ({
        url: "/api/auth/sign-out",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
      transformResponse: response => console.log("logOutResp: ", response),
    }),
  }),
});

export const { useSignOutMutation } = signOutApi;
