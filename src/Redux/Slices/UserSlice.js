import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../Actions/UserActions";
import builderCases from "./BuilderCases";
const tokenFromStorrage = localStorage.getItem("token");
const userFromStorrage = localStorage.getItem("user");

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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builderCases(builder);
  }
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
