import { createSlice } from "@reduxjs/toolkit";

import builderCases from "./BuilderCases";

const initialState = {
  ammount: 1
};

export const utilitySlice = createSlice({
  name: "uility",
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
export const { incrementByAmount } = utilitySlice.actions;

export default utilitySlice.reducer;
