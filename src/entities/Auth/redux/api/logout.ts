import { api } from "app/redux";

const signOutApi = api.injectEndpoints({
  endpoints: builder => ({
    signOut: builder.mutation({
      query: () => ({
        url: "/api/auth/sign-out",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignOutMutation } = signOutApi;
