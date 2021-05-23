import { useState } from "react";
import axios from "../Utility/axiosConfiguration";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resetCart } from "../Redux/Slices/CartSlice/CartSlice";
export default function usePlaceOrder() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const placeOrder = async (data) => {
    try {
      setLoading(true);
      await axios.post(`orders/order`);
      dispatch(resetCart());
      toast.success("Order placed successfully !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { placeOrder, loading };
}
