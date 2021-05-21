import { getCartItems } from "../../Actions/CartActions";

const builderCases = (builder) => {
  builder.addCase(getCartItems.pending, (state, { payload }) => {
    state.loadingCart = true;
  });
  builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
    state.loadingProducts = false;
    state.cartItems = payload;
  });
  builder.addCase(getCartItems.rejected, (state, { payload }) => {
    state.loadingCart = false;
    state.cartItems = [];
  });
};
export default builderCases;
