import { useState } from "react";
import axios from "../Utility/axiosConfiguration";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

/* custom hook for adding new post */
export default function useAddNewProduct(product) {
  const [data, setData] = useState({
    name: product ? product.name : "",
    price: product ? product.price : "",
    description: product ? product.description : "",
    shortDescription: product
      ? product.shortDescription
        ? product.shortDescription
        : ""
      : "",
    categoryId: product ? product?.category?.categoryId : null,
    new: product ? product?.new : false,
    featured: product ? product?.featured : false
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setData({ ...data, [name]: checked });
    } else {
      setData({ ...data, [name]: value });
    }
    /* set input value to the value from the event.target (input in the register page must have the name matching one of the input values variable at the top of the hook) */
  };
  /* src is  the image to display instead of the placeholder one */
  const [file, setFile] = useState("");
  const [src, setSrc] = useState(product ? product.publicUrl : null);
  const [submitting, setSubmitting] = useState(false);

  const history = useHistory();
  /* handles change of the input field for selecting the post image */
  const handleSelect = (e) => {
    let reader = new FileReader();
    const x = e.target.files[0];
    reader.readAsDataURL(x);
    setFile(x);
    reader.onload = () => {
      setSrc(reader.result);
    };
  };
  /* submit data to server */
  const submitData = async (e, ProductId) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("Name", data.name);
    formData.append("Price", data.price);
    formData.append("Description", data.description);
    formData.append("ShortDescription", data.shortDescription);
    formData.append("CategoryId", data.categoryId);
    formData.append("New", data.new);
    formData.append("Featured", data.featured);
    if (ProductId) {
      formData.append("ProductId", ProductId);
    }
    try {
      /* set submitting to true so we show the spinner */
      setSubmitting(true);
      if (ProductId) {
        await axios.put("Products", formData);
      } else {
        await axios.post("Products", formData);
      }

      /* show message that post has been successfully uploaded */
      toast.success(
        `Product ${product ? "updated" : "created"} successfully !`,
        {
          position: toast.POSITION.BOTTOM_LEFT
        }
      );
      /* appent post to posts */

      /* set submitting to false so we hide the spinner */
      setSubmitting(false);
      /* redirect user to manageProducts */

      history.push("/manageProducts");
    } catch (err) {
      console.log(err.response);
      /* set submitting to false so we hide the spinner */
      setSubmitting(false);
    }
  };
  return {
    data,
    handleSelect,
    src,
    handleChange,
    submitData,
    submitting,
    file,
    setData,
    setSrc
  };
}
