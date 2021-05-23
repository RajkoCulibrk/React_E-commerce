import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import usePlaceOrder from "../../Hooks/PlaceOrderHook";
import LoadingSpinner from "../core/LoadingSpinner";

const CartDetails = () => {
  const { placeOrder, loading } = usePlaceOrder();
  const cart = useSelector((state) => state.cart);
  const total = cart.cartItems.length
    ? cart.cartItems.reduce((acc, c) => {
        return acc + c.product.price * c.ammount;
      }, 0)
    : 0;
  const handleOrder = () => {
    placeOrder();
  };
  /* console.log(total); */
  return (
    <Container fluid className="d-flex flex-column justify-content-center">
      <h5 className="text-center">Total :</h5>
      <p className="text-center">{total} $</p>
      <button onClick={() => handleOrder()} className="btn btn-primary">
        {loading ? <LoadingSpinner /> : "Place order"}
      </button>
    </Container>
  );
};

export default CartDetails;
