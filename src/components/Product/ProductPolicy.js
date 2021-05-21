import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductPolicy = ({ icon, text }) => {
  return (
    <div className="product__policies__policy d-flex flex-column align-items-center">
      <span className="rounded-circle bg-warning p-3">
        {" "}
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className="text-wrap">{text}</div>
    </div>
  );
};

export default ProductPolicy;
