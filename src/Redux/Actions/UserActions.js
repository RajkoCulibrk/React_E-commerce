import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axios from "../../Utility/axiosConfiguration";
import { getCartItems } from "./CartActions";
/* login thunk returns auth token */
export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("Auth/Login", data);
      /* set token to localstorage */
      localStorage.setItem("token", response.data.data);

      dispatch(getUserData());
      /* display wellcome message */
      toast.info("Wellcome !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return response.data.data;
    } catch (err) {
      localStorage.removeItem("token");
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("Auth/register", data);
      /* set token to localstorage */
      localStorage.setItem("token", response.data.data);

      dispatch(getUserData());
      /* display wellcome message */
      /*    toast.info("Wellcome !", {
          position: toast.POSITION.BOTTOM_CENTER
        }); */
      return response.data.data;
    } catch (err) {
      localStorage.removeItem("token");
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("users", data);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch(getCartItems());
      return response.data.data;
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (err.response?.data.msg) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue(err.message);
    }
  }
);
