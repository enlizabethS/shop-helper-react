import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "entities/Product";

interface IProductsState {
  products: IProduct[];
}

const initialState: IProductsState = {
  products: [],
};

const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      state.products.push(action.payload);
    },
    resetProducts: state => {
      state.products = initialState.products;
    },
  },
});

export const { saveProducts, resetProducts } = userSlice.actions;

export default userSlice.reducer;
