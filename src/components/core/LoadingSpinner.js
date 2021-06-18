import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ dimensions }) => {
  return (
    <Spinner
      style={{
        width: dimensions ? dimensions : "40px",
        height: dimensions ? dimensions : "40px",
        margin: "auto",
        display: "block"
      }}
      animation="border"
      role="status"
    ></Spinner>
  );
};

export default LoadingSpinner;
