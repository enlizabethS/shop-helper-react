import { createSlice } from "@reduxjs/toolkit";
import { IUser, IAddress } from "entities/User";

interface IUserState {
  currentUser: IUser;
  address: IAddress;
  // products: IProduct[];
  // auctions: IAuction[];
  // bids: IBid[];
}

const initialState: IUserState = {
  currentUser: {
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createdDate: "",
    role: "",
    addressId: 0,
    productsId: [],
    purchasesId: [],
  },
  address: {
    id: 0,
    street: "",
    houseNumber: 0,
    city: "",
    postalCode: 0,
    country: "",
    createdDate: "",
  },
  // products: [],
  // auctions: [],
  // bids: [],
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    resetCurrentUser: state => {
      state.currentUser = initialState.currentUser;
    },
    saveAddress: (state, action) => {
      state.address = action.payload;
    },
    resetAddress: state => {
      state.address = initialState.address;
    },
    // saveProducts: (state, action) => {
    //   state.products = action.payload;
    // },
    // resetProducts: state => {
    //   state.products = initialState.products;
    // },
    // saveAuctions: (state, action) => {
    //   state.auctions = action.payload;
    // },
    // resetAuctions: state => {
    //   state.auctions = initialState.auctions;
    // },
    // saveBids: (state, action) => {
    //   state.auctions = action.payload;
    // },
    // resetBids: state => {
    //   state.bids = initialState.bids;
    // },
  },
});

export const {
  saveCurrentUser,
  resetCurrentUser,
  saveAddress,
  resetAddress,
  // saveProducts,
  // resetProducts,
  // saveAuctions,
  // resetAuctions,
  // saveBids,
  // resetBids,
} = userSlice.actions;

export default userSlice.reducer;
