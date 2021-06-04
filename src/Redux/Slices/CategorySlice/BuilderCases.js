import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory
} from "../../Actions/CategoryActions";

const builderCases = (builder) => {
  builder.addCase(getCategories.pending, (state) => {
    state.loadingCategories = true;
  });
  builder.addCase(getCategories.fulfilled, (state, { payload }) => {
    state.categories = payload;
    state.loadingCategories = false;
  });
  builder.addCase(deleteCategory.fulfilled, (state, { payload }) => {
    state.categories = state.categories.filter(
      (c) => c.categoryId !== payload.categoryId
    );
  });
  builder.addCase(createCategory.fulfilled, (state, { payload }) => {
    state.categories.unshift(payload);
  });
  builder.addCase(updateCategory.fulfilled, (state, { payload }) => {
    state.categories = state.categories.filter(
      (c) => c.categoryId !== payload.categoryId
    );
    state.categories.unshift(payload);
  });
};
export default builderCases;
