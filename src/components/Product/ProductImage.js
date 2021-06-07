import React from "react";
import { Button, Figure } from "react-bootstrap";
import useDeleteProductImage from "../../Hooks/DeleteProductImage";

const ProductImage = ({ image, data, setData }) => {
  const { loading, deleteImage } = useDeleteProductImage(data, setData);
  return (
    <Figure className="m-0 m-sm-3 product_image">
      <Figure.Image
        width={300}
        height={220}
        alt={image.productImageId}
        src={image.publicUrl}
      />
      <Button
        disabled={loading}
        size="sm"
        onClick={() => deleteImage(image.productImageId)}
        variant="danger"
        className="product_image__delete"
      >
        {loading ? "Deleting" : "Delete"}
      </Button>
    </Figure>
  );
};

export default ProductImage;
