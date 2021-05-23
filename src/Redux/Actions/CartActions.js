import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { toast } from "react-toastify"; */
import axios from "../../Utility/axiosConfiguration";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("cart");

      console.log(response.data);
      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post("Cart", data);

      console.log(response.data);
      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
