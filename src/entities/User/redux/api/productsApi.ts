import { api } from "app/redux";
import { IProduct } from "entities/User";

const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchProductById: builder.query<IProduct, number>({
      query: id => ({
        url: `/api/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
    fetchProductCurrentUser: builder.query<IProduct[], null>({
      query: () => ({
        url: "/api/users/my/products",
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
    
    // updateAddress: builder.mutation({
    //   query: address => ({
    //     url: `/api/addresses/${address.id}`,
    //     method: "PUT",
    //     body: {
    //       street: address.street,
    //       houseNumber: address.houseNumber,
    //       city: address.city,
    //       postalCode: address.postalCode,
    //       country: address.country,
    //     },
    //   }),
    //   invalidatesTags: ["Address"],
    // }),
  }),
});

export const { useFetchProductByIdQuery, useFetchProductCurrentUserQuery } =
  productsApi;
