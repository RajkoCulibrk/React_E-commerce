import { useState } from "react";
import axios from "../Utility/axiosConfiguration";
export default function useFetchOrderItems() {
  const [orderItems, setOrderItems] = useState([]);
  const [loadingOrderItems, setLoadingOrderItems] = useState(false);

  const fetchOrderItems = async (orderId) => {
    try {
      setLoadingOrderItems(true);
      const { data } = await axios.get("orders/getOrderItems/" + orderId);
      setOrderItems(data.data);
      setLoadingOrderItems(false);
    } catch (error) {
      setLoadingOrderItems(false);
    }
  };

  return { orderItems, loadingOrderItems, fetchOrderItems };
}
