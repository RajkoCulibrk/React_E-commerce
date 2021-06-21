import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import OrderDetails from "../components/Order/OrderDetails";
import OrderItemsList from "../components/Order/OrderItemsList";

const OrderAdmin = () => {
  const { id } = useParams();

  return (
    <Container fluid>
      <OrderDetails orderId={id} />
      <OrderItemsList orderId={id} />
    </Container>
  );
};

export default OrderAdmin;
