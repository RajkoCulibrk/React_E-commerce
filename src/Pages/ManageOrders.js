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
  const page = params.get("page");
  let perPage = params.get("perPage")
    ? params.get("perPage") * 1
    : isMobile || isTablet
    ? 10
    : 15;

  useEffect(() => {
    fetchOrders({ pageNumber: page, pageSize: perPage });
    // eslint-disable-next-line
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
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                      }).format(date)}
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
