import { createSlice } from "@reduxjs/toolkit";
import { IUser, IAddress } from "entities/User";

interface IUserState {
  currentUser: IUser;
  address: IAddress;
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
  },
});

export const {
  saveCurrentUser,
  resetCurrentUser,
  saveAddress,
  resetAddress,
} = userSlice.actions;

export default userSlice.reducer;
