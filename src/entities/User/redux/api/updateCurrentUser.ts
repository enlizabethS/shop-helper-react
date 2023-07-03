import { api } from "app/redux";

const updateUserApi = api.injectEndpoints({
  endpoints: builder => ({
    updateCurrentUser: builder.mutation({
      query: user => ({
        url: `/api/users/${user.id}`,
        method: "PUT",
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUpdateCurrentUserMutation } = updateUserApi;
