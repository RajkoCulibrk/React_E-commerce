import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import builderCases from "./BuilderCases";
const tokenFromStorrage = localStorage.getItem("token");
const userFromStorrage = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userFromStorrage,
  token: tokenFromStorrage,
  errors: [],
  gettingToken: false,
  loadingUser: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      toast.info("Goodbye !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  },
  extraReducers: (builder) => {
    builderCases(builder);
  }
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
