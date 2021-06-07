import { useState } from "react";
import axios from "../Utility/axiosConfiguration";
import { toast } from "react-toastify";
export default function useAddProductImage(data, setData) {
  const [file, setFile] = useState("");
  const [src, setSrc] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSelect = (e) => {
    let reader = new FileReader();
    const x = e.target.files[0];
    reader.readAsDataURL(x);
    setFile(x);
    reader.onload = () => {
      setSrc(reader.result);
    };
  };

  const uploadPicture = async () => {
    let formData = new FormData();
    formData.append("file", file);
    try {
      setSubmitting(true);
      const response = await axios.post(
        `Products/${data.product.productId}`,
        formData
      );

      let images = data.product.images;
      images.push(response.data.data);

      setData({ data, product: { ...data.product, images: images } });
      toast.success(`Image uploade successfully successfully !`, {
        position: toast.POSITION.BOTTOM_LEFT
      });
      setSrc(null);
      setFile("");
      setSubmitting(false);
    } catch (error) {
      console.log(error.response);
      setSrc(null);
      setFile("");
      setSubmitting(false);
    }
  };

  return {
    file,
    src,
    submitting,
    handleSelect,
    uploadPicture
  };
}
