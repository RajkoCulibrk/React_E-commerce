import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { getCartItems } from "../Redux/Actions/CartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          {cart.cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </Col>
        <Col md={4}>asdf</Col>
      </Row>
    </Container>
  );
};

export default Cart;
