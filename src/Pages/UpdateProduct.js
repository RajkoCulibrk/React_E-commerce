import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { useParams } from "react-router";
import AddUpdateProductForm from "../components/Product/AddUpdateProductForm";

import useFetchSingleProduct from "../Hooks/FetchSingleProductHook";

const UpdateProduct = () => {
  const { id } = useParams();

  const {
    data: { product, loadingProduct },
    fetchProduct
  } = useFetchSingleProduct();
  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <Container>
      {product && <AddUpdateProductForm product={product} />}
    </Container>
  );
};

export default UpdateProduct;
