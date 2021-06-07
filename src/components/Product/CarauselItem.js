import React from "react";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const CarauselItem = ({ product }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column carausel_item  ">
      <div className=" d-flex justify-content-center align-items-center flex-column rounded w-100 m-2 p-1">
        <Link
          to={"/product/" + product.productId}
          style={{ textDecoration: "none", color: "initial" }}
        >
          <div className="  p-2 w-100 d-flex flex-column text-center justify-content-center carausel_item__image_container mb-2">
            <img src={product.publicUrl} className="turac" alt="" />
            <h5>Naslodv</h5>
          </div>
        </Link>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default CarauselItem;
