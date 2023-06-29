import { api } from "app/redux";

const signOutApi = api.injectEndpoints({
  endpoints: builder => ({
    logOut: builder.mutation({
      query: () => ({
        url: "/api/auth/sign-out",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLogOutMutation } = signOutApi;
