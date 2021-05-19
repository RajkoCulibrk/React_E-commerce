import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice/UserSlice";
import productReducer from "./Slices/ProductSlice/ProductSlice";
import categoryReducer from "./Slices/CategorySlice/CategorySlice";
export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories: categoryReducer
  }
});
