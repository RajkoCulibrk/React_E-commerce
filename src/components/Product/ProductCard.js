import React from "react";
import { Card } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

import Currency from "react-currency-formatter";
import AddToCartButton from "./AddToCartButton";
const ProductCard = ({ product }) => {
  const { pathname } = useLocation();

  return (
    <Card className="m-2 product__card rounded">
      <Link
        to={
          (pathname === "/manageProducts" ? "/updateProduct/" : "/product/") +
          product.productId
        }
        style={{ textDecoration: "none", color: "initial" }}
      >
        <div className="product__card__image-container">
          <Card.Img src={product.publicUrl} />
        </div>
      </Link>
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ height: "50px" }}>
          {product.description.substring(0, 30)}
        </Card.Text>
        <Card.Text className="font-italic">
          <Currency quantity={product.price} currency="USD" />
        </Card.Text>
        {pathname !== "/manageProducts" && (
          <AddToCartButton product={product} />
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
