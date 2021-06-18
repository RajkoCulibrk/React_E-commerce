import { createSlice } from "@reduxjs/toolkit";

import builderCases from "./BuilderCases";

const initialState = {
  products: [],
  total: 0,
  pages: 1,
  loadingProducts: false,
  featuredProducts: [],
  loadingFeaturedProducts: false,
  newProducts: [],
  loadingNewProducts: false
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  loadingProducts: false,
  deletingProduct: false,
  reducers: {},
  extraReducers: (builder) => {
    builderCases(builder);
  }
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line
export const {} = productSlice.actions;

export default productSlice.reducer;
