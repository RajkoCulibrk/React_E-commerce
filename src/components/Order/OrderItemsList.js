import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetchOrderItems from "../../Hooks/FetchOrderItems";
import Currency from "react-currency-formatter";
const OrderItemsList = ({ orderId }) => {
  const { orderItems, fetchOrderItems } = useFetchOrderItems();

  useEffect(() => {
    fetchOrderItems(orderId);
    // eslint-disable-next-line
  }, [orderId]);
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
                <td>
                  <Currency quantity={oi.price} currency="USD" />
                </td>
                <td>{oi.ammount}</td>
                <td>
                  <Currency quantity={oi.ammount * oi.price} currency="USD" />
                </td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="4">Total</td>
            <td>
              <Currency
                quantity={orderItems.reduce((a, oi) => {
                  return a + oi.price * oi.ammount;
                }, 0)}
                currency="USD"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderItemsList;
