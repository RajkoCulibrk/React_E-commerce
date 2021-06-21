import React, { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartDetails from "../components/Cart/CartDetails";
import CartItem from "../components/Cart/CartItem";
import { getCartItems } from "../Redux/Actions/CartActions";
import emptyCart from "../images/empty-cart.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    cart,
    user: { user }
  } = useSelector((state) => state);
  useEffect(() => {
    if (user) {
      dispatch(getCartItems());
    }
  }, [dispatch, user]);

  return (
    <Container fluid>
      <Row>
        <Col md={8} className="d-flex flex-column align-items-center ">
          {!cart.cartItems.length && (
            <Container className="d-flex flex-column align-items-center ">
              <img width="300px" src={emptyCart} alt="empty cart" />

              <Alert variant={"info"}>Your cart is empty !</Alert>
            </Container>
          )}

          {cart.cartItems.map((cartItem) => (
            <CartItem key={cartItem.product.productId} cartItem={cartItem} />
          ))}
        </Col>
        <Col md={4}>
          <CartDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
