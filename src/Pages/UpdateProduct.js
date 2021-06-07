import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { useParams } from "react-router";
import AddUpdateProductForm from "../components/Product/AddUpdateProductForm";
import ProductImages from "../components/Product/ProductImages";

import useFetchSingleProduct from "../Hooks/FetchSingleProductHook";

const UpdateProduct = () => {
  const { id } = useParams();

  const { data, fetchProduct, setData } = useFetchSingleProduct();
  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <Container>
      {data.product && <AddUpdateProductForm product={data.product} />}
      {data.product && <ProductImages data={data} setData={setData} />}
    </Container>
  );
};

export default UpdateProduct;
