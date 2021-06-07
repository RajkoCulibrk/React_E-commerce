import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../Utility/axiosConfiguration";
export default function useDeleteProductImage(data, setData) {
  const [loading, setLoading] = useState(false);
  const deleteImage = async (imageId) => {
    try {
      setLoading(true);
      await axios.delete("products/images/" + imageId);

      setLoading(false);
      let images = data.product.images.filter(
        (img) => img.productImageId !== imageId
      );

      setData({ data, product: { ...data.product, images: images } });
      toast.warning(`Picture has been deleted.`, {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return { loading, deleteImage };
}
