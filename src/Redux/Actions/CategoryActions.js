import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { toast } from "react-toastify"; */
import axios from "../../Utility/axiosConfiguration";
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("categories");

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
