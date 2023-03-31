import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";

function Ideas() {
    const handleSubmit = event => {
        event.preventDefault(); // Prevent page refresh
    };
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <div className="container-fluid">
                <Navbar.Brand>
                    <img src={logo} alt="" style={{height:50, width:50}} />
                </Navbar.Brand>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <Nav className="me-auto">
                    <Nav.Link>View Ideas</Nav.Link>
                    <Nav.Link as={Link} to={`/CatEditor`}>Category</Nav.Link>
                    <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                </Nav>
                <Nav.Link href={`Login`} className="btn btn-danger">Logout</Nav.Link>
            </div>
        </Navbar>
        </>
    )
}

export default Ideas;