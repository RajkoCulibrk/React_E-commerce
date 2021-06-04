import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import useDeleteOrder from "../../Hooks/DeleteOrder";
import useFetchSingleOrder from "../../Hooks/FetchSingleOrder";
import LoadingSpinner from "../core/LoadingSpinner";

const OrderDetails = ({ orderId }) => {
  const { user } = useSelector((state) => state.user);
  const {
    order,
    loadingOrder,
    fetchOrder,
    confirmOrder,
    markSent,
    loadingSent,
    loadingConfirmed
  } = useFetchSingleOrder();
  const { deleting, deleteOrder } = useDeleteOrder();
  /* const [confirmed, setConfirmed] = useState(false); */
  useEffect(() => {
    fetchOrder(orderId);
  }, []);
  return (
    <Container fluid>
      <h5 className="text-center">Order Details</h5>
      {!loadingOrder && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Column </th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order Id</td>
              <td>{order?.orderId}</td>
            </tr>
            <tr>
              <td>User Id</td>
              <td>{order?.userId}</td>
            </tr>
            <tr>
              <td>Date ordered</td>
              <td>{order?.createdAt}</td>
            </tr>
            <tr>
              <td>Street</td>
              <td>{order?.street}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{order?.city}</td>
            </tr>
            <tr>
              <td>House Number</td>
              <td>{order?.houseNumber}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{order?.country}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>{order?.email}</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>{order?.phone}</td>
            </tr>
            <tr>
              <td>Confirmed</td>
              <td>
                {loadingConfirmed ? (
                  <LoadingSpinner />
                ) : (
                  <input
                    type="checkbox"
                    disabled={!user.isAdmin}
                    onChange={(e) => confirmOrder(order.orderId)}
                    value={order?.confirmed}
                    checked={order?.confirmed}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Sent</td>
              <td>
                {loadingSent ? (
                  <LoadingSpinner />
                ) : (
                  <input
                    disabled={!user.isAdmin}
                    type="checkbox"
                    onChange={(e) => markSent(order.orderId)}
                    value={order?.sent}
                    checked={order?.sent}
                  />
                )}
              </td>
            </tr>
            {user.isAdmin && (
              <tr>
                <td>Delete</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteOrder(order.orderId)}
                    className="btn btn-danger"
                  >
                    {deleting ? <LoadingSpinner /> : "Delete"}
                  </button>{" "}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderDetails;
