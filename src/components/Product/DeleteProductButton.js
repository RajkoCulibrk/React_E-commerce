import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductActions";

const DeleteProductButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { deletingProduct } = useSelector((state) => state.products);
  const handleDelete = () => {
    dispatch(deleteProduct(productId));
  };
  return (
    <Button
      onClick={() => handleDelete()}
      variant="danger"
      size="lg"
      className="mt-5 mb-3"
      type="button"
    >
      {deletingProduct ? "Deleting" : "Delete product"}
    </Button>
  );
};

export default DeleteProductButton;
