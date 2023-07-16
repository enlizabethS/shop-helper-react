import { api } from "app/redux";
import { IProduct } from "entities/Product";

const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchProductById: builder.query<IProduct, number>({
      query: id => ({
        url: `/api/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    fetchProductsCurrentUser: builder.query<IProduct[], null>({
      query: () => ({
        url: "/api/users/my/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: newProduct => ({
        url: "/api/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
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

export const {
  useLazyFetchProductByIdQuery,
  useFetchProductsCurrentUserQuery,
  useAddProductMutation,
  useAddNewImgMutation,
} = productsApi;
