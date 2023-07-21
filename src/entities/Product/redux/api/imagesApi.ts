import { api } from "app/redux";

const imagesApi = api.injectEndpoints({
  endpoints: builder => ({
    addNewImage: builder.mutation({
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

export const { useAddNewImageMutation } = imagesApi;
