import { api } from "app/redux";
import { IAddress } from "entities/User";

const addressApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchAddress: builder.query<IAddress, number>({
      query: id => ({
        url: `/api/addresses/${id}`,
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
    updateAddress: builder.mutation<IAddress, IAddress>({
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
    addAddress: builder.mutation<IAddress, IAddress>({
      query: newAddress => ({
        url: "/api/addresses",
        method: "POST",
        body: newAddress,
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const {
  useFetchAddressQuery,
  useUpdateAddressMutation,
  useAddAddressMutation,
} = addressApi;
