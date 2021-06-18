import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PaginationComponent from "../components/core/PaginationComponent";
import useFetchOrders from "../Hooks/FetchOrders";
import { isMobile, isTablet } from "react-device-detect";
import LoadingSpinner from "../components/core/LoadingSpinner";

const ManageOrders = () => {
  const { orders, loadingOrders, fetchOrders, pages } = useFetchOrders();
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  const categoryId = params.get("categoryId");
  const page = params.get("page");
  const sortBy = params.get("sortBy");
  const order = params.get("order");
  let perPage = params.get("perPage")
    ? params.get("perPage") * 1
    : isMobile || isTablet
    ? 10
    : 15;
  useEffect(() => {
    fetchOrders({ pageNumber: page, pageSize: perPage });
  }, [page, perPage]);
  return (
    <Container fluid>
      {loadingOrders ? (
        <LoadingSpinner dimensions={"300px"} />
      ) : (
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
                    <input
                      type="checkbox"
                      readOnly
                      checked={o.confirmed}
                    />{" "}
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
      )}

      <PaginationComponent perPage={perPage} pages={pages} />
    </Container>
  );
};

export default ManageOrders;
