import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarauselMultipleItems from "../components/core/Carausel";

import SideNav from "../components/core/SideNav";

import ProductGalery from "../components/Product/ProductGalery";

const Home = () => {
  return (
    <Container className="homepage" fluid>
      <Row className="kurac">
        <Col className="d-none col-md-3 col-lg-2 d-md-block m-0 p-0 ">
          <SideNav className="h-100" />
        </Col>
        <Col className=" col-md-9 col-lg-10 m-0 p-0 ">
          <CarauselMultipleItems />
          <ProductGalery />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
