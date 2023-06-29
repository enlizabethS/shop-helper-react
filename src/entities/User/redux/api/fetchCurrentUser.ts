import { api } from "app/redux";
// import { IUser } from "entities/User";

const currentUserApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => ({
        url: "/api/users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: response => console.log(response),
    }),
  }),
});

export const { useFetchCurrentUserQuery } = currentUserApi;
