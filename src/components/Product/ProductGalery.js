import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProducts } from "../../Redux/Actions/ProductActions";
import { isMobile, isTablet } from "react-device-detect";
import PaginationComponent from "../core/PaginationComponent";

import ProductCard from "./ProductCard";
import LoadingSpinner from "../core/LoadingSpinner";
import NoContent from "../core/NoContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SideNavContent from "../core/SideNavContent";

const ProductGalery = () => {
  const { products, pages, loadingProducts } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  const categoryId = params.get("categoryId");
  const page = params.get("page");
  const sortBy = params.get("sortBy");
  const order = params.get("order");
  const like = params.get("like");
  let perPage = params.get("perPage")
    ? params.get("perPage") * 1
    : isMobile || isTablet
    ? 10
    : 15;
  useEffect(() => {
    dispatch(
      getProducts({
        categoryId,
        pageNumber: page,
        pageSize: perPage,
        sortBy,
        order,
        like
      })
    );
  }, [dispatch, categoryId, page, perPage, sortBy, order, like]);
  const stopPropagation = (e) => {
    e.stopPropagation();
    console.log("scroll");
  };
  const [showSideNav, setShowSideNav] = useState(false);
  const sideNavRef = useRef();
  const openCloseRef = useRef();

  const showHideSideNav = () => {
    if (showSideNav) {
      sideNavRef.current.style.transform = "translateX(-100%)";
      openCloseRef.current.style.right = "initial";
      openCloseRef.current.style.left = "2rem";
    } else {
      sideNavRef.current.style.transform = "translateX(0%)";
      openCloseRef.current.style.right = "2rem";
      openCloseRef.current.style.left = "initial";
    }
    setShowSideNav(!showSideNav);
  };
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center "
    >
      <Container fluid className="d-flex flex-wrap justify-content-center mb-5">
        {loadingProducts ? (
          <LoadingSpinner dimensions={"300px"} />
        ) : (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        )}
      </Container>
      {!products.length && !loadingProducts && (
        <NoContent variant={"info"} text={"No content on this page"} />
      )}
      <PaginationComponent perPage={perPage} pages={pages} />
      <div
        ref={sideNavRef}
        onScroll={(e) => stopPropagation(e)}
        className="mobile_side_nav_container"
      >
        <SideNavContent noSticky={true} />
      </div>
      <Button
        ref={openCloseRef}
        onClick={() => showHideSideNav()}
        className=" btn btn-warning d-block d-md-none mobile_side_nav_button"
      >
        <FontAwesomeIcon size="lg" icon={faFilter} />
      </Button>
    </Container>
  );
};

export default ProductGalery;
