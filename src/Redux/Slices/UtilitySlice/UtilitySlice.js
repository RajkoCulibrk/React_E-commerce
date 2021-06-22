import { createSlice } from "@reduxjs/toolkit";

import builderCases from "./BuilderCases";

const initialState = {
  ammount: 1,
  searchOpen: false
};

export const utilitySlice = createSlice({
  name: "uility",
  initialState,
  reducers: {
    openColseSearch: (state) => {
      state.searchOpen = !state.searchOpen;
    }
  },
  extraReducers: (builder) => {
    builderCases(builder);
  }
});

// Action creators are generated for each case reducer function
export const { openColseSearch } = utilitySlice.actions;

export default utilitySlice.reducer;
