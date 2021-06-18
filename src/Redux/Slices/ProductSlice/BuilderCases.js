import {
  deleteProduct,
  getFeaturedProducts,
  getNewProducts,
  getProducts
} from "../../Actions/ProductActions";

const builderCases = (builder) => {
  builder.addCase(getProducts.pending, (state) => {
    state.loadingProducts = true;
  });
  builder.addCase(getProducts.fulfilled, (state, { payload }) => {
    state.loadingProducts = false;
    state.products = payload.data;
    state.pages = payload.pages;
    state.total = payload.total;
  });
  builder.addCase(getProducts.rejected, (state) => {
    state.loadingProducts = false;
    state.products = [];
  });
  builder.addCase(deleteProduct.pending, (state) => {
    state.deleteingProduct = true;
  });
  builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
    state.deleteingProduct = false;
    state.products = state.products.filter((p) => p.productId !== payload);
  });
  builder.addCase(deleteProduct.rejected, (state) => {
    state.deleteingProduct = true;
  });

  builder.addCase(getNewProducts.pending, (state) => {
    state.loadingNewProducts = true;
  });
  builder.addCase(getNewProducts.fulfilled, (state, { payload }) => {
    state.loadingNewProducts = false;
    state.newProducts = payload;
  });
  builder.addCase(getNewProducts.rejected, (state) => {
    state.loadingNewProducts = false;
  });

  builder.addCase(getFeaturedProducts.pending, (state) => {
    state.loadingFeaturedProducts = true;
  });
  builder.addCase(getFeaturedProducts.fulfilled, (state, { payload }) => {
    state.loadingFeaturedProducts = false;
    state.featuredProducts = payload;
  });
  builder.addCase(getFeaturedProducts.rejected, (state) => {
    state.loadingFeaturedProducts = false;
  });
};
export default builderCases;
