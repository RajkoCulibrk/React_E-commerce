import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CarauselMultipleItems from "../components/core/Carausel";

import SideNav from "../components/core/SideNav";

import ProductGalery from "../components/Product/ProductGalery";

const Home = () => {
  const { featuredProducts, newProducts } = useSelector(
    (state) => state.products
  );
  return (
    <Container className="homepage" fluid>
      <Row className="kurac">
        <Col className="d-none col-md-3 col-lg-2 d-md-block m-0 p-0 ">
          <SideNav className="h-100" />
        </Col>
        <Col className=" col-md-9 col-lg-10 m-0 p-0 ">
          <CarauselMultipleItems
            title={"Featured"}
            products={featuredProducts}
          />
          <ProductGalery />
          <CarauselMultipleItems
            title={"New products"}
            products={newProducts}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
