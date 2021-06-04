import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetchOrderItems from "../../Hooks/FetchOrderItems";

const OrderItemsList = ({ orderId }) => {
  const { orderItems, loadingOrderItems, fetchOrderItems } =
    useFetchOrderItems();
  useEffect(() => {
    fetchOrderItems(orderId);
  }, []);
  return (
    <Container>
      <h5 className="text-center">Order Items</h5>
      <Table striped bordered hover className="w-100" size="sm">
        <thead>
          <tr>
            <th>Prod. Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((oi) => {
            return (
              <tr key={oi.product.productId}>
                <td>{oi.product.productId}</td>
                <td>
                  <Link to={"/product/" + oi.product.productId}>
                    {oi.product.name}
                  </Link>
                </td>
                <td>{oi.price}</td>
                <td>{oi.ammount}</td>
                <td>{oi.ammount * oi.price}</td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="4">Total</td>
            <td>
              {orderItems.reduce((a, oi) => {
                return a + oi.price * oi.ammount;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderItemsList;
