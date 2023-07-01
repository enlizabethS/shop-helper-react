import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "entities/User";

interface IUserState {
  currentUser: IUser;
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
  },
});

export const { saveCurrentUser, resetCurrentUser } = userSlice.actions;

export default userSlice.reducer;
