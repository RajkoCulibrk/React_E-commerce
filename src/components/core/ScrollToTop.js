import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  /* scroll to the top of the document */
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Button className="to_top " onClick={() => handleClick()} variant="warning">
      <FontAwesomeIcon size="lg" icon={faArrowUp} />
    </Button>
  );
};

export default ScrollToTop;
