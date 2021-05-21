import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect className="navbar" sticky="top" expand="lg">
      <Navbar.Brand as={Link} to="/">
        MyShop
      </Navbar.Brand>
      <button className="d-block btn btn-warning  d-lg-none ml-auto">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
      <Navbar.Toggle
        className="align-self-end ml-2"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <button className="d-none btn btn-warning  d-lg-block">
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <Nav>
          <Nav.Link as={Link} to="/login" href="#deets">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register" eventKey={2} href="#memes">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
