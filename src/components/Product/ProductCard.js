import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCheckIfInCart from "../../Hooks/CheckIfInCart";
import { addToCart } from "../../Redux/Actions/CartActions";
import { addToCartNotLoggedIn } from "../../Redux/Slices/CartSlice/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import removeFromCartIcon from "../../images/remove-from-cart-icon.svg";
const ProductCard = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isInCart = useCheckIfInCart(product.productId);
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
    <Card className="m-2 product__card rounded">
      <Link
        to={"/product/" + product.productId}
        style={{ textDecoration: "none", color: "initial" }}
      >
        <Card.Img variant="top" src={product.publicUrl} />
      </Link>
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ height: "50px" }}>{product.description}</Card.Text>
        <Card.Text className="font-italic">{product.price} $</Card.Text>
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
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
