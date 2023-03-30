import React from "react";
import { NavDropdown } from "react-bootstrap";

function Cat() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="src/images/c57.gif" alt="" width={50} height={50} />
                </a>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="qam_ideals.html">
                        View Ideals
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                        Category
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                        Dashboard
                        </a>
                    </li>
                    </ul>
                    <a href="login.html" className="btn btn-danger me-2">
                    <i className="fa-solid fa-right-to-bracket" /> Log out
                    </a>
                </div>
                </div>
            </nav>
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
                        <form action="">
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
                            <form action="">
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
                                <form action="">
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