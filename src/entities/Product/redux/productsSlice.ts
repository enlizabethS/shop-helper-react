import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "entities/Product";

interface IProductsState {
  products: IProduct[];
  currentProduct: IProduct | null;
}

const initialState: IProductsState = {
  products: [],
  currentProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    resetProducts: state => {
      state.products = initialState.products;
    },
    saveCurrentProduct(state, action: PayloadAction<IProduct>) {
      state.currentProduct = action.payload;
    },
    resetCurrentProduct(state) {
      state.currentProduct = initialState.currentProduct;
    },
  },
});

export const {
  saveProducts,
  resetProducts,
  saveCurrentProduct,
  resetCurrentProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
