import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "entities/User";

interface IUserState {
  user: IUser;
}

const initialState: IUserState = {
  user: {
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
      state.user = action.payload;
    },
    resetCurrentUser: state => {
      state.user = initialState.user;
    },
  },
});

export const { saveCurrentUser, resetCurrentUser } = userSlice.actions;

export default userSlice.reducer;
