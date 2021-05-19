import { createSlice } from "@reduxjs/toolkit";

import builderCases from "./BuilderCases";

const initialState = {
  categories: [],
  loadingCategories: false
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  loadingProducts: false,
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
export const { incrementByAmount } = categorySlice.actions;

export default categorySlice.reducer;
