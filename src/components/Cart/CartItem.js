import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Currency from "react-currency-formatter";
import AmmountRegulator from "./AmmountRegulator";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const [ammount, setAmmount] = useState(cartItem.ammount);

  return (
    <Container className="mt-3 cart_item">
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
            <Col sm={7}>
              <h5>{cartItem.product.name}</h5>
              <p>
                {cartItem.product.shortDescription
                  ? cartItem.product.shortDescription
                  : cartItem.product.description.substring(0, 50) + "..."}
              </p>
              <p>
                price:{" "}
                <Currency quantity={cartItem.product.price} currency="USD" />
              </p>
              <p>
                category:{" "}
                {cartItem.product?.category?.name
                  ? cartItem.product?.category?.name
                  : "Unknown"}
              </p>
            </Col>
            <Col sm={5} className="d-flex align-items-center">
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
