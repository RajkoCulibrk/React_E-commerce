import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const CartIcon = ({ classes }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Link to="/cart" className={classes + " position-relative"}>
      <span className="badge badge-info cartIcon__number">
        {cart.cartItems?.length}
      </span>
      <FontAwesomeIcon icon={faCartPlus} />
    </Link>
  );
};

export default CartIcon;
