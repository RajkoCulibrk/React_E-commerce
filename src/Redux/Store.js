import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice/UserSlice";
import productReducer from "./Slices/ProductSlice/ProductSlice";
import categoryReducer from "./Slices/CategorySlice/CategorySlice";
import CartSlice from "./Slices/CartSlice/CartSlice";
import UtilitySlice from "./Slices/UtilitySlice/UtilitySlice";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories: categoryReducer,
    cart: CartSlice,
    utility: UtilitySlice
  }
});
