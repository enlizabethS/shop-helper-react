import { api } from "app/redux";
import { IProduct } from "entities/Product";

interface IFilterState {
  title: string;
}

const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchProductById: builder.query<IProduct, string>({
      query: id => ({
        url: `/api/products/${id}`,
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
    findProductByFilter: builder.mutation<IProduct[], IFilterState>({
      query: filter => ({
        url: "/api/products/find",
        method: "POST",
        body: filter,
      }),
    }),
  }),
});

export const {
  useLazyFetchProductByIdQuery,
  useFetchProductByIdQuery,
  useLazyFetchProductsCurrentUserQuery,
  useAddProductMutation,
  useFindProductByFilterMutation,
} = productsApi;
