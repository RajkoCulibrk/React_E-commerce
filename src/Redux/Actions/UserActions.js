import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
/* import { toast } from "react-toastify"; */
import axios from "../../Utility/axiosConfiguration";
/* login thunk returns auth token */
export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("Auth/Login", data);
      /* set token to localstorage */
      localStorage.setItem("token", response.data.data);
      console.log(response.data.data);
      /*  dispatch(getUser()); */
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
      console.log(response.data.data);
      /*  dispatch(getUser()); */
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
