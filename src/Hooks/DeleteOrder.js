import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "../Utility/axiosConfiguration";
export default function useDeleteOrder() {
  const history = useHistory();
  const [deleting, setDeleting] = useState(false);
  const deleteOrder = async (orderId) => {
    try {
      setDeleting(true);
      const { data } = await axios.delete("orders/" + orderId);
      setDeleting(false);
      if (data.data) {
        history.push("/manageOrders");
        toast.warning(`Order ${orderId} has been deleted.`, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      }
    } catch (error) {
      console.log(error);
      setDeleting(false);
    }
  };
  return { deleting, deleteOrder };
}
