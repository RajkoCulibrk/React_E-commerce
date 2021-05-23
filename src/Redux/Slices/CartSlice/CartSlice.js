import { createSlice } from "@reduxjs/toolkit";

import builderCases from "./BuilderCases";
let cart = JSON.parse(localStorage.getItem("cart"));
let user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  cartItems: user ? [] : cart,
  loadingCart: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cartItems = [];
    },
    addToCartNotLoggedIn: (state, { payload }) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (payload.ammount == 0) {
        let index = cart.findIndex((ci) => {
          return ci.product.productId === payload.product.productId;
        });
        console.log(index);
        cart.splice(index, 1);
      } else {
        let index = cart.findIndex((ci) => {
          return ci.product.productId === payload.product.productId;
        });
        if (index > -1) {
          cart[index] = payload;
        } else {
          cart.push(payload);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      state.cartItems = cart;
    }
  },
  extraReducers: (builder) => {
    builderCases(builder);
  }
});

// Action creators are generated for each case reducer function
export const { resetCart, addToCartNotLoggedIn } = cartSlice.actions;

export default cartSlice.reducer;
