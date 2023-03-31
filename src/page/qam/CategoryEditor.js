import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";

function Cat() {
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
                    <Nav.Link as={Link} to={`/`}>View Ideas</Nav.Link>
                    <Nav.Link>Category</Nav.Link>
                    <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                </Nav>
                <Nav.Link href={`Login`} className="btn btn-danger">Logout</Nav.Link>
            </div>
        </Navbar>
            <div className="container text-center">
                <h2>Category</h2>
                <div className="row justify-content-md-center">
                <div className="col col-lg-2">
                    <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                    >
                    <NavDropdown title="Add New" id="basic-nav-dropdown">
                        <form action="" onSubmit={handleSubmit}>
                            New Category
                            <input
                                type="text"
                                className="form-control"
                                id="addCategory"
                                placeholder="Category"
                            />
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </NavDropdown>
                    </button>
                </div>
                <div className="col-md-auto">
                    <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                    >
                        <NavDropdown title="Make change" id="basic-nav-dropdown">
                            <form action="" onSubmit={handleSubmit}>
                                Category
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addCategory"
                                    placeholder="Category"
                                />
                                New Category
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addCategory"
                                    placeholder="Category"
                                />
                                <button type="submit" className="btn btn-warning">
                                    Edit
                                </button>
                            </form>
                        </NavDropdown>
                    </button>
                </div>
                <div className="col col-lg-2">
                    <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                    >
                        <NavDropdown title="Delete" id="basic-nav-dropdown">
                            <form action="" onSubmit={handleSubmit}>
                                Category
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addCategory"
                                    placeholder="Category"
                                />
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </NavDropdown>
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cat;