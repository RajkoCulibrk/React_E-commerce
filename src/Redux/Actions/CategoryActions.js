import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../../Utility/axiosConfiguration";
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("categories");

      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete("categories/" + id);
      toast.error("Category delete successfully !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (name, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("categories", { name });
      toast.success("Category created successfully !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.put("categories", data);
      toast.warning("Category updated successfully !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return response.data.data;
    } catch (err) {
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
