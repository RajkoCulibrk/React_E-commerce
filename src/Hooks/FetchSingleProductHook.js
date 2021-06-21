import { useEffect, useRef, useState } from "react";
import axios from "../Utility/axiosConfiguration";
export default function useFetchSingleProduct() {
  const [data, setData] = useState({
    product: null,
    loadingProduct: false,
    error: null
  });
  const mounted = useRef(true);
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  const fetchProduct = async (id) => {
    try {
      setData({ ...data, loadingProduct: true });
      const response = await axios.get(`products/${id}`);
      if (mounted.current) {
        setData({
          ...data,
          product: response.data.data,
          loadingProduct: false
        });
      }
    } catch (error) {
      console.log(error);
      setData({ ...data, product: null, loadingProduct: false });
    }
  };

  return { data, fetchProduct, setData };
}
