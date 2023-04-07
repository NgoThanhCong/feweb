import React from "react";
import { Navbar, Dropdown, Nav, DropdownButton, Container } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";
import {BsBoxArrowInRight} from "react-icons/bs";

function Cat() {
    const handleSubmit = event => {
        event.preventDefault(); // Prevent page refresh
    };
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <img src={logo} alt="" style={{height:50, width:50}} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={`/`}>View Ideas</Nav.Link>
                    <Nav.Link active>Category</Nav.Link>
                    <Nav.Link as={Link} to={`/Dashboard`}>Dashboard</Nav.Link>
                </Nav>
                <Nav.Link href={`Login`} style={{alignItems: "center", display:"flex", justifyContent: "center", fontSize:20, width:100, color:"white"}} className="btn btn-danger">
                    <BsBoxArrowInRight/> <a style={{ marginLeft: '.5rem' }}>Logout</a> 
                </Nav.Link>
            </Container>
        </Navbar>

            <div className="container text-center">
                <h2>Category</h2>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                        <DropdownButton title="Add New Category" id="dropdown-basic-button">
                            <form action="" onSubmit={handleSubmit}>
                                <Dropdown.ItemText>
                                    New Category
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <input type="text" className="form-control" id="addCategory" placeholder="Input here..." required/>
                                </Dropdown.ItemText>
                                <Dropdown.ItemText  style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-primary">
                                        Add
                                    </button>
                                </Dropdown.ItemText>
                            </form>
                        </DropdownButton>
                    </div>
                    
                    <div className="col-md-auto">
                        <DropdownButton title="Change Category Name" id="dropdown-basic-button" variant="warning">
                            <form action="" onSubmit={handleSubmit} >
                                <Dropdown.ItemText>
                                    Category
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <input type="text" className="form-control" id="existedCategory" placeholder="Input here..." required/>
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    New Category
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <input type="text" className="form-control" id="newCategory" placeholder="Input here..." required/>
                                </Dropdown.ItemText>
                                <Dropdown.ItemText style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-warning">
                                        Change
                                    </button>
                                </Dropdown.ItemText>
                            </form>
                        </DropdownButton>
                    </div>
                    
                    <div className="col col-lg-2">
                        <DropdownButton title="Delete Category" id="dropdown-basic-button" variant="danger">
                            <form action="" onSubmit={handleSubmit}>
                                <Dropdown.ItemText>
                                    Category
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <input type="text" className="form-control" id="deleteCategory" placeholder="Input here..." required/>
                                </Dropdown.ItemText>
                                <Dropdown.ItemText  style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </Dropdown.ItemText>
                            </form>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cat;