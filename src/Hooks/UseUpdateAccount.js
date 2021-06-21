import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../Utility/axiosConfiguration";
export default function useUpdateAccount() {
  const [submitting, setSubmitting] = useState(false);

  const updateAccount = async (updateData) => {
    try {
      setSubmitting(true);
      await axios.put("Users", updateData);

      setSubmitting(false);
      toast.success("Account updated successfully !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } catch (error) {
      setSubmitting(false);
      console.log(error.response);
    }
  };

  return { submitting, updateAccount };
}
