import { getProducts } from "../../Actions/ProductActions";

const builderCases = (builder) => {
  builder.addCase(getProducts.pending, (state, { payload }) => {
    state.loadingProducts = true;
  });
  builder.addCase(getProducts.fulfilled, (state, { payload }) => {
    state.loadingProducts = false;
    state.products = payload;
  });
  builder.addCase(getProducts.rejected, (state, { payload }) => {
    state.loadingProducts = false;
    state.products = [];
  });
};
export default builderCases;
