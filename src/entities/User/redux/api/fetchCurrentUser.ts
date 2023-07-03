import { api } from "app/redux";

const currentUserApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => ({
        url: "/api/users/my/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useFetchCurrentUserQuery } = currentUserApi;
