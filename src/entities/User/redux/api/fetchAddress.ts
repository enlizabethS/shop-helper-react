import { api } from "app/redux";

const addressApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchAddress: builder.query({
      query: id => ({
        url: `/api/addresses/${id}`,
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
  }),
});

export const { useFetchAddressQuery } = addressApi;
