import React, { useEffect } from "react";
import { CardDeck, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";
import ProductCard from "./ProductCard";

const ProductGalery = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Container fluid className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </Container>
  );
};

export default ProductGalery;
