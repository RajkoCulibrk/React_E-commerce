import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import usePlaceOrder from "../../Hooks/PlaceOrderHook";
import useInput from "../../Hooks/RegisterLoginHook";
import LoadingSpinner from "../core/LoadingSpinner";
import OrderDetails from "./OrderDetails";
import Currency from "react-currency-formatter";

const CartDetails = () => {
  const [data, handleChange, errors, touched, setTouched] = useInput();
  const { user } = useSelector((state) => state.user);
  const { placeOrder, loading } = usePlaceOrder();
  const cart = useSelector((state) => state.cart);
  const total = cart.cartItems.length
    ? cart.cartItems.reduce((acc, c) => {
        return acc + c.product.price * c.ammount;
      }, 0)
    : 0;

  const handleOrder = () => {
    if (user) {
      placeOrder();
    } else {
      const products = cart.cartItems.map((cartItem) => {
        return {
          ammount: cartItem.ammount,
          productId: cartItem.product.productId
        };
      });
      const payload = { products, ...data };
      placeOrder(payload);
    }
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center cart_details"
    >
      <h5 className="text-center">Total :</h5>
      <p className="text-center">
        <Currency quantity={total} currency="USD" />
      </p>
      <button
        disabled={
          !cart.cartItems.length ||
          (!data.firstName && !user) ||
          (!data.lastName && !user) ||
          (!data.street && !user) ||
          (!data.houseNumber && !user) ||
          (!data.city && !user) ||
          (!data.country && !user) ||
          (!data.phoneNumber && !user) ||
          (!data.email && !user)
        }
        onClick={() => handleOrder()}
        className="btn btn-primary"
      >
        {loading ? <LoadingSpinner /> : "Place order"}
      </button>
      {!user && (
        <OrderDetails
          useInput={{ data, handleChange, errors, touched, setTouched }}
        />
      )}
    </Container>
  );
};

export default CartDetails;
