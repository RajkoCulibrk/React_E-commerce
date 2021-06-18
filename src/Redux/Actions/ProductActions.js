import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { toast } from "react-toastify"; */
import axios from "../../Utility/axiosConfiguration";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("products", { params });

      return data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const getNewProducts = createAsyncThunk(
  "product/getNewProducts",
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("products/new");

      return data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
export const getFeaturedProducts = createAsyncThunk(
  "product/getFeaturedProducts",
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("products/featured");

      return data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`products/${productId}`);

      return response.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
