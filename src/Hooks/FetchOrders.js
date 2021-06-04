import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../Utility/axiosConfiguration";
export default function useFetchOrders() {
  const { user } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  const fetchOrders = async () => {
    try {
      setLoadingOrders(true);
      if (user.isAdmin) {
        const { data } = await axios.get("orders/admin");
        setOrders(data.data);
      } else {
        const { data } = await axios.get("orders");
        setOrders(data.data);
      }

      setLoadingOrders(false);
    } catch (error) {
      setLoadingOrders(false);
    }
  };
  return { orders, loadingOrders, fetchOrders };
}
