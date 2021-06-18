import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../Utility/axiosConfiguration";
export default function useFetchOrders() {
  const { user } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [pages, setPages] = useState(0);

  const fetchOrders = async (params) => {
    try {
      setLoadingOrders(true);
      if (user.isAdmin) {
        const { data } = await axios.get("orders/admin", { params });
        setOrders(data.data.data);
        setPages(data.data.pages);
      } else {
        const { data } = await axios.get("orders", { params });
        setOrders(data.data.data);
        setPages(data.data.pages);
      }

      setLoadingOrders(false);
    } catch (error) {
      setLoadingOrders(false);
    }
  };
  return { orders, loadingOrders, fetchOrders, pages };
}
