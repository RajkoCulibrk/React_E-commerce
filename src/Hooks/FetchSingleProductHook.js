import { useState } from "react";
import axios from "../Utility/axiosConfiguration";
export default function useFetchSingleProduct() {
  const [data, setData] = useState({
    product: null,
    loadingProduct: false,
    error: null
  });

  const fetchProduct = async (id) => {
    try {
      setData({ ...data, loadingProduct: true });
      const response = await axios.get(`products/${id}`);
      setData({ ...data, product: response.data.data, loadingProduct: false });
    } catch (error) {
      console.log(error);
      setData({ ...data, product: null, loadingProduct: false });
    }
  };

  return { data, fetchProduct, setData };
}
