import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";
import CarauselMultipleItems from "../core/Carausel";

import ProductCard from "./ProductCard";

const ProductGalery = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Container fluid className="d-flex flex-wrap justify-content-center mb-5">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </Container>
  );
};

export default ProductGalery;
