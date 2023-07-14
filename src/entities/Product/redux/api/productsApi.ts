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
        // headers: {
        //   "Content-Type": "multipart/form-data; charset=UTF-8",
        // },
        body: formData,
        // formData: true,
        credentials: "include",
      }),
      invalidatesTags: ["Image"],
      transformResponse: res => console.log("addNewImg res: ", res),
    }),
    fetchImgById: builder.query({
      query: id => `/api/images/${id}`,
      providesTags: ["Image"],
      transformResponse: res => console.log("fetchImg res: ", res),
    }),
  }),
});

export const {
  useLazyFetchProductByIdQuery,
  useFetchProductsCurrentUserQuery,
  useAddProductMutation,
  useAddNewImgMutation,
  useLazyFetchImgByIdQuery,
} = productsApi;
