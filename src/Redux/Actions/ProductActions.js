import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { toast } from "react-toastify"; */
import axios from "../../Utility/axiosConfiguration";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("products");

      console.log(response.data);
      return response.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
