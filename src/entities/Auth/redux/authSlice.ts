import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  status: number;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  status: 0,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.status = action.payload.status;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.status = initialState.status;
      state.isLoggedIn = false;
    },
    refreshUser: (state, action) => {
      state.status = action.payload.status;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;
