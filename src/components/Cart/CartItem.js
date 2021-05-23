import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AmmountRegulator from "./AmmountRegulator";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const [ammount, setAmmount] = useState(cartItem.ammount);

  return (
    <Container className="mt-2">
      <Row>
        <Col sm={4}>
          <Link to={"/product/" + cartItem.product.productId}>
            <img
              width="150px"
              className="rounded"
              src={cartItem.product.publicUrl}
              alt="slika"
            />
          </Link>
        </Col>
        <Col sm={8}>
          <Row>
            <Col sm={8}>
              <h5>{cartItem.product.name}</h5>
              <p>{cartItem.product.description}</p>
              <p>price: {cartItem.product.price} $</p>
              <p>category: {cartItem.product?.category?.name}</p>
            </Col>
            <Col sm={4} className="d-flex align-items-center">
              <AmmountRegulator
                product={cartItem.product}
                ammount={ammount}
                setAmmount={setAmmount}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
