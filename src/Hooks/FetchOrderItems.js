import { useEffect, useRef, useState } from "react";
import axios from "../Utility/axiosConfiguration";
export default function useFetchOrderItems() {
  const [orderItems, setOrderItems] = useState([]);
  const [loadingOrderItems, setLoadingOrderItems] = useState(false);
  /* dodato */
  const mounted = useRef(true);
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const fetchOrderItems = async (orderId) => {
    try {
      setLoadingOrderItems(true);
      const { data } = await axios.get("orders/getOrderItems/" + orderId);
      if (mounted.current === true) {
        setOrderItems(data.data);
        setLoadingOrderItems(false);
      }
    } catch (error) {
      setLoadingOrderItems(false);
    }
  };

  return { orderItems, loadingOrderItems, fetchOrderItems };
}
