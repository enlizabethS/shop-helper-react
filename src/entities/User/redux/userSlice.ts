import { createSlice } from "@reduxjs/toolkit";
import { IUser, IAddress } from "entities/User";

interface IUserState {
  currentUser: IUser;
  address: IAddress;
}

const initialState: IUserState = {
  currentUser: {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    createdDate: null,
    role: null,
    addressId: null,
    productsId: null,
    purchasesId: null,
  },
  address: {
    id: null,
    street: null,
    houseNumber: null,
    city: null,
    postalCode: null,
    country: null,
    createdDate: null,
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

export const { saveCurrentUser, resetCurrentUser, saveAddress, resetAddress } =
  userSlice.actions;

export default userSlice.reducer;
