import { api } from "app/redux";

const imagesApi = api.injectEndpoints({
  endpoints: builder => ({
    addNewImg: builder.mutation({
      query: formData => ({
        url: "/api/images",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
      invalidatesTags: ["Image"],
    }),
  }),
});

export const { useAddNewImgMutation } = imagesApi;
