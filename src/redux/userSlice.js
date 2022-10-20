import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userData: {},
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
      state.userData = {
        name: "Ataasil User",
        email: "ataasil@mail.com",
      };
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const userAction = userSlice.actions;
