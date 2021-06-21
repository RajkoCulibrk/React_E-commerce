import React from "react";
import { Col, Container, DropdownButton, Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="text-white p-2">
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center "
          >
            <h5 className="border-top border-bottom border-white w-100 p-2 text-center">
              Locations
            </h5>
            <DropdownButton
              variant="secondary"
              className="mt-2"
              title="Belegrade"
            >
              <Dropdown.Item>Mon-Fri: 08:00-16:00</Dropdown.Item>
              <Dropdown.Item>Saturday 08:00-14:00</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              variant="secondary"
              className="mt-2"
              title="Novi Sad"
            >
              <Dropdown.Item>Mon-Fri: 08:00-16:00</Dropdown.Item>
              <Dropdown.Item>Saturday 08:00-14:00</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              variant="secondary"
              className="mt-2"
              title="Subotica"
            >
              <Dropdown.Item>Mon-Fri: 08:00-16:00</Dropdown.Item>
              <Dropdown.Item>Saturday 08:00-14:00</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center">
            <h5 className="border-top border-bottom border-white w-100 p-2 text-center">
              Contact
            </h5>
            <span className="mt-2">Phone: </span>
            <span className="mt-2">064/555-55-55 </span>
            <span className="mt-2">Email: </span>
            <span className="mt-2">mailmail93@gmail.com</span>
            <span className="mt-2">Address: </span>
            <span className="mt-2">Some Street 65b New York </span>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center">
            <h5 className="border-top border-bottom border-white w-100 p-2 text-center">
              Policy
            </h5>
            <span className="mt-2">Odering</span>
            <span className="mt-2">Shipping</span>
            <span className="mt-2">Payments</span>
          </Col>
        </Row>
        <Row className="text-white d-flex justify-content-center align-items-center p-3">
          <FontAwesomeIcon icon={faCopyright} /> &nbsp;
          {new Date().getFullYear()} Rajko Culibrk
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
