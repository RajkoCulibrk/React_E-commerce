import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import LoadingSpinner from "../components/core/LoadingSpinner";
import OrderDetails from "../components/Order/OrderDetails";
import OrderItemsList from "../components/Order/OrderItemsList";
import useFetchSingleOrder from "../Hooks/FetchSingleOrder";

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
