import React from "react";
import { Container, Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../images/c57.gif';

function Category() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="">
                    <img src={logo} alt="Sussy"></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="">View Ideals</Nav.Link>
                    <Nav.Link>Category</Nav.Link>
                    <Nav.Link href="">Dashboard</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Category;