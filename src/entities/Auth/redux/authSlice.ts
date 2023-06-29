import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  user: {
    id: number;
    username: string;
    email: string;
  };
  status: number;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  user: {
    id: 0,
    username: "",
    email: "",
  },
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
    registrationSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;
