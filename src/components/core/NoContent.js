import { Alert } from "react-bootstrap";
import React from "react";

const NoContent = ({ variant, text }) => {
  return (
    <Alert className="text-center" variant={variant}>
      {text}
    </Alert>
  );
};

export default NoContent;
