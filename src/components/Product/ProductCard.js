import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={"/product/" + product.productId}
      style={{ textDecoration: "none", color: "initial" }}
    >
      <Card className="m-2 product__card rounded">
        <Card.Img variant="top" src={product.publicUrl} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text style={{ height: "50px" }}>
            {product.description}
          </Card.Text>
          <Card.Text className="font-italic">{product.price} $</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
