import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userRole: 1,
  userId: {},
  currentUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userRole = payload.userRole;
      state.userId = payload.userId;
    },
    loadUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    logOutUser: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.userId = {};
      state.currentUser = {};
    },
  },
});

export const { loadUser, loginUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
