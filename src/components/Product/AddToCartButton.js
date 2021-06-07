import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useCheckIfInCart from "../../Hooks/CheckIfInCart";
import { addToCart } from "../../Redux/Actions/CartActions";
import { addToCartNotLoggedIn } from "../../Redux/Slices/CartSlice/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import removeFromCartIcon from "../../images/remove-from-cart-icon.svg";

const AddToCartButton = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isInCart = useCheckIfInCart(product.productId);

  /* handle add product to the cart */
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (user) {
      if (isInCart) {
        dispatch(addToCart({ productId: product.productId, ammount: 0 }));
      } else {
        dispatch(addToCart({ productId: product.productId, ammount: 1 }));
      }
    } else {
      if (isInCart) {
        dispatch(addToCartNotLoggedIn({ product, ammount: 0 }));
      } else {
        dispatch(addToCartNotLoggedIn({ product, ammount: 1 }));
      }
    }
  };
  return (
    <Button
      onClick={(e) => handleAddToCart(e)}
      variant={isInCart ? "success" : "primary"}
    >
      {isInCart ? (
        <img width="20px" alt="adsf" src={removeFromCartIcon} />
      ) : (
        <FontAwesomeIcon icon={faCartPlus} />
      )}
    </Button>
  );
};

export default AddToCartButton;
