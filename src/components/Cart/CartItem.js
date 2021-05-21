import React from "react";
import { ButtonGroup, Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ cartItem }) => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <img width="150px" src={cartItem.product.publicUrl} alt="slika" />
        </Col>
        <Col sm={8}>
          <Row>
            <Col sm={8}>
              <h5>{cartItem.product.name}</h5>
              <p>{cartItem.product.description}</p>
              <p>price: {cartItem.product.price} $</p>
              <p>category:kurcina</p>
            </Col>
            <Col sm={4} className="d-flex align-items-center">
              <ButtonGroup className="w-100">
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faChevronUp} />
                </Button>
                <div className="text-center w-50 ">12</div>
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faChevronDown} />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
