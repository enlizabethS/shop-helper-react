import { api } from "app/redux";
import { IProduct } from "entities/User";

const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchProductById: builder.query<IProduct, number>({
      query: id => ({
        url: `/api/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    fetchProductCurrentUser: builder.query<IProduct[], null>({
      query: () => ({
        url: "/api/users/my/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: newProduct => ({
        url: `/api/product`,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useLazyFetchProductByIdQuery,
  useFetchProductCurrentUserQuery,
  useAddProductMutation,
} = productsApi;
