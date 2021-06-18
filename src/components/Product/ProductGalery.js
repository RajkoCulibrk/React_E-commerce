import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProducts } from "../../Redux/Actions/ProductActions";
import { isMobile, isTablet } from "react-device-detect";
import PaginationComponent from "../core/PaginationComponent";

import ProductCard from "./ProductCard";
import LoadingSpinner from "../core/LoadingSpinner";
import NoContent from "../core/NoContent";

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
        order
      })
    );
  }, [dispatch, categoryId, page, perPage, sortBy, order]);
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
      {!products.length && !loadingProducts && <NoContent />}
      <PaginationComponent perPage={perPage} pages={pages} />
    </Container>
  );
};

export default ProductGalery;
