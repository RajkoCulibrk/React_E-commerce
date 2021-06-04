import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import useCheckIfInCart from "../../Hooks/CheckIfInCart";
import useHandleAddToCart from "../../Hooks/UseAddRemoveFromCart";

const AmmountRegulator = ({ product, ammount, setAmmount }) => {
  const isInCart = useCheckIfInCart(product?.productId);
  const { handleAddToCart } = useHandleAddToCart();

  const handleAmmountChange = (x) => {
    if (ammount + x < 1) {
      if (isInCart) {
        handleAddToCart(product, 0);
      }
      return;
    }
    if (isInCart) {
      handleAddToCart(product, ammount + x);
    }
    setAmmount(ammount + x);
  };
  return (
    <ButtonGroup className="w-100 ">
      <Button onClick={() => handleAmmountChange(1)} variant="secondary">
        <FontAwesomeIcon icon={faChevronUp} />
      </Button>
      <input
        className="text-center ammount_regulator w-50 "
        readOnly
        value={ammount}
      />
      <Button onClick={() => handleAmmountChange(-1)} variant="secondary">
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </ButtonGroup>
  );
};

export default AmmountRegulator;
