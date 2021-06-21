import { addToCart, getCartItems } from "../../Actions/CartActions";

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
  builder.addCase(addToCart.fulfilled, (state, { payload }) => {
    // eslint-disable-next-line
    if (payload.ammount == 0) {
      state.cartItems = state.cartItems.filter(
        (ci) => ci.product.productId !== payload.product.productId
      );
      return;
    }
    let exists = state.cartItems.find(
      (ci) => ci.product.productId === payload.product.productId
    );
    if (exists) {
      exists.ammount = payload.ammount;
    } else {
      state.cartItems = [payload, ...state.cartItems];
    }
  });
};
export default builderCases;
