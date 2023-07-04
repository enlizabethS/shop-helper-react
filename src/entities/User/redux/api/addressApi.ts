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
    updateAddress: builder.mutation({
      query: address => ({
        url: `/api/addresses/${address.id}`,
        method: "PUT",
        body: {
          street: address.street,
          houseNumber: address.houseNumber,
          city: address.city,
          postalCode: address.postalCode,
          country: address.country,
        },
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const { useFetchAddressQuery, useUpdateAddressMutation } = addressApi;
