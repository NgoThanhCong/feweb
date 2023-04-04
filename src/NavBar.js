import React from "react";
import { FormControl, NavbarBrand, NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <NavbarBrand href="#home">FPT Greenwich</NavbarBrand>
          <NavbarToggle aria-controls="navbarScroll" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink as={Link} to={`/Login`} active>Home</NavLink>
              <NavLink href="#ViewIdea" active>Event</NavLink>
              <NavLink href="#UserList" active>User Manager</NavLink>
              <NavLink href="#CreateAccount" active>CreateAccount</NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" active>Search</Button>
            </Form>
        </Container>
      </Navbar>
    </>
  );
}
