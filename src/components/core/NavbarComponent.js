import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect className="navbar" sticky="top" expand="lg">
      <Navbar.Brand as={Link} to="/">
        MyShop
      </Navbar.Brand>
      <CartIcon classes={"d-block btn btn-warning  d-lg-none ml-auto"} />

      <Navbar.Toggle
        className="align-self-end ml-2"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/manageProducts">
              Manage Products
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/addProduct">
              Add Product
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartIcon classes={"d-none btn btn-warning  d-lg-block"} />

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
