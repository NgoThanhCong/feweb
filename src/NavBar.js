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

const styles = {
  avatar: {
    margin: "auto",
    width: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0",
  }
}

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="p-2">
        <Container fluid>
          <NavbarBrand>
            <img style={styles.avatar} src="https://fpt.edu.vn/Content/images/assets/2022-Greenwich-Eng.jpg" alt="FPT Greenwich"></img>
          </NavbarBrand>
          
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" , fontSize: "18px" }}
              navbarScroll
            >
              <NavLink as={Link} to={`/AdminHome`} active>Home</NavLink>
              <NavLink as={Link} to={`/AdminIdea`} active>Event</NavLink>
              <NavLink as={Link} to={`/UserList`} active>User Manager</NavLink>
              <NavLink as={Link} to={`/CreateAccount`} active>CreateAccount</NavLink>
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
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
