import { getCategories } from "../../Actions/CategoryActions";

const builderCases = (builder) => {
  builder.addCase(getCategories.pending, (state, { payload }) => {
    state.loadingCategories = true;
  });
  builder.addCase(getCategories.fulfilled, (state, { payload }) => {
    state.categories = payload;
    state.loadingCategories = false;
  });
};
export default builderCases;
