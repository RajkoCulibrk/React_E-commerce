import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetchOrders from "../Hooks/FetchOrders";

const ManageOrders = () => {
  const { orders, loadingOrders, fetchOrders } = useFetchOrders();
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <Container fluid>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => {
            let date = new Date(o.createdAt);
            return (
              <tr key={o.orderId}>
                <td>{o.orderId}</td>
                <td>
                  <Link to={`/order/` + o.orderId}>
                    {date.getDay()}.{date.getMonth()}.{date.getUTCFullYear()}
                  </Link>
                </td>
                <td>
                  {" "}
                  <input type="checkbox" readOnly checked={o.confirmed} />{" "}
                </td>
                <td>
                  {" "}
                  <input type="checkbox" readOnly checked={o.sent} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageOrders;
