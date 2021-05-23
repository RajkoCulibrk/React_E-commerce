import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideNav from "../components/core/SideNav";
import ProductGalery from "../components/Product/ProductGalery";

const ManageProducts = () => {
  return (
    <Container className="homepage" fluid>
      <Row className="kurac">
        <Col className="d-none col-md-3 col-lg-2 d-md-block m-0 p-0 ">
          <SideNav className="h-100" />
        </Col>
        <Col className=" col-md-9 col-lg-10 m-0 p-0 ">
          <ProductGalery />
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProducts;
