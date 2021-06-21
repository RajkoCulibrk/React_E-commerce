import { useEffect, useRef, useState } from "react";
import axios from "../Utility/axiosConfiguration";
import { toast } from "react-toastify";
export default function useFetchSingleOrder() {
  const [order, setOrder] = useState(null);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [loadingConfirmed, setLoadingConfirmed] = useState(false);
  const [loadingSent, setLoadingSent] = useState(false);

  const mounted = useRef(true);
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  const fetchOrder = async (id) => {
    try {
      setLoadingOrder(true);
      const { data } = await axios.get("orders/" + id);
      if (mounted.current) {
        setOrder(data.data);
        setLoadingOrder(false);
      }
    } catch (error) {
      setLoadingOrder(false);
    }
  };

  const confirmOrder = async (id) => {
    try {
      setLoadingConfirmed(true);
      const { data } = await axios.put("orders/confirm/" + id);
      setOrder({ ...order, confirmed: data.data });
      if (data.data) {
        toast.success(
          `Order ${id} has been marked as confirmed. An email will will be sent to user about this.`,
          {
            position: toast.POSITION.BOTTOM_LEFT
          }
        );
      }
      setLoadingConfirmed(false);
    } catch (error) {
      console.log(error);
      setLoadingConfirmed(false);
    }
  };
  const markSent = async (id) => {
    try {
      setLoadingSent(true);
      const { data } = await axios.put("orders/send/" + id);
      setOrder({ ...order, sent: data.data });
      if (data.data) {
        toast.success(
          `Order ${id} has been marked as sent. An email will will be sent to user about this.`,
          {
            position: toast.POSITION.BOTTOM_LEFT
          }
        );
      }

      setLoadingSent(false);
    } catch (error) {
      setLoadingSent(false);
    }
  };
  return {
    order,
    loadingOrder,
    fetchOrder,
    confirmOrder,
    markSent,
    loadingSent,
    loadingConfirmed,
    setLoadingConfirmed
  };
}
