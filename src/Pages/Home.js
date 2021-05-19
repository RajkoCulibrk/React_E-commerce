import React, { useEffect } from "react";
import { CardDeck, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/core/SideNav";
import ProductCard from "../components/Product/ProductCard";
import ProductGalery from "../components/Product/ProductGalery";
import { getProducts } from "../Redux/Actions/ProductActions";

const Home = () => {
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

export default Home;
