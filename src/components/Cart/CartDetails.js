import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import usePlaceOrder from "../../Hooks/PlaceOrderHook";
import useInput from "../../Hooks/RegisterLoginHook";
import LoadingSpinner from "../core/LoadingSpinner";
import OrderDetails from "./OrderDetails";

const CartDetails = () => {
  const [data, handleChange, errors, touched, setTouched] = useInput();
  const { placeOrder, loading } = usePlaceOrder();
  const cart = useSelector((state) => state.cart);
  const total = cart.cartItems.length
    ? cart.cartItems.reduce((acc, c) => {
        return acc + c.product.price * c.ammount;
      }, 0)
    : 0;

  const handleOrder = () => {
    const products = cart.cartItems.map((cartItem) => {
      return {
        ammount: cartItem.ammount,
        productId: cartItem.product.productId
      };
    });
    const payload = { products, ...data };
    placeOrder(payload);
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center cart_details"
    >
      <h5 className="text-center">Total :</h5>
      <p className="text-center">{total} $</p>
      <button
        disabled={
          !cart.cartItems.length ||
          !data.firstName ||
          !data.lastName ||
          !data.street ||
          !data.houseNumber ||
          !data.city ||
          !data.country ||
          !data.phoneNumber ||
          !data.email
        }
        onClick={() => handleOrder()}
        className="btn btn-primary"
      >
        {loading ? <LoadingSpinner /> : "Place order"}
      </button>
      <OrderDetails
        useInput={{ data, handleChange, errors, touched, setTouched }}
      />
    </Container>
  );
};

export default CartDetails;
