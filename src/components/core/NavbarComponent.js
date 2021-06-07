import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/Slices/UserSlice/UserSlice";

import CartIcon from "./CartIcon";
const NavbarComponent = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
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
          {user?.isAdmin && (
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/manageProducts">
                Manage Products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addProduct">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manageCategories">
                Manage Categories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orders">
                Manage Orders
              </NavDropdown.Item>
            </NavDropdown>
          )}

          {!user?.isAdmin && user && (
            <NavDropdown title="My Space" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/account">
                Account info
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/orders">
                My Orders
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
        <CartIcon classes={"d-none btn btn-warning  d-lg-block"} />

        <Nav>
          {user ? (
            <Button
              onClick={() => {
                handleLogout();
              }}
              className="btn btn-warning ml-0 ml-lg-3  "
            >
              Logout
            </Button>
          ) : (
            <>
              {" "}
              <Nav.Link as={Link} to="/login" href="#deets">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" eventKey={2} href="#memes">
                Register
              </Nav.Link>{" "}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
