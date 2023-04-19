import React, { useState } from "react";
import { Navbar, Dropdown, Nav, DropdownButton, Container, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsBoxArrowInRight, BsSearch} from "react-icons/bs";

const styles = {
    avatar: {
      margin: "auto",
      width: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0",
    }
}

function Cat() {
    const handleSubmit = event => {
        event.preventDefault(); // Prevent page refresh
    };
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <img src="https://fpt.edu.vn/Content/images/assets/2022-Greenwich-Eng.jpg" alt="" style={styles.avatar} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={`/QamIdeas`}>View Ideas</Nav.Link>
                    <Nav.Link active>Category</Nav.Link>
                    <Nav.Link as={Link} to={`/Dashboard`}>Dashboard</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search"/>
                    <Button variant="dark" className="me-5">
                        <BsSearch/>
                    </Button>
                </Form>
                <Nav.Link href={`Login`} style={{alignItems: "center", display:"flex", justifyContent: "center", fontSize:20, width:100, height:40, color:"white"}} className="btn btn-danger">
                    <BsBoxArrowInRight/> <a style={{ marginLeft: '.5rem' }}>Logout</a> 
                </Nav.Link>
            </Container>
        </Navbar>

            <div className="container text-center">
                <h2>Category</h2>
                <div>
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
                <br/>
                <Table bordered size="sm">
                    <thead>
                        <tr style={{backgroundColor:"#A9A9A9"}}>
                            <th width={"50%"}>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sports</td>
                            <td>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-auto">
                                        <DropdownButton title="Edit category" id="dropdown-basic-button" variant="warning">
                                            <form action="" onSubmit={handleSubmit} required>
                                                <Dropdown.ItemText>
                                                    New Title
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
                                        <DropdownButton title="Delete" id="dropdown-basic-button" variant="danger">
                                            <form action="" onSubmit={handleSubmit}>
                                                <Dropdown.ItemText>
                                                    Are you sure?
                                                </Dropdown.ItemText>
                                                <Dropdown.ItemText  style={{textAlign:"center"}}>
                                                    <button type="submit" className="btn btn-danger" style={{ marginLeft: '.5rem' }}>
                                                        Delete
                                                    </button>
                                                </Dropdown.ItemText>
                                            </form>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Education</td>
                            <td>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-auto">
                                        <DropdownButton title="Edit category" id="dropdown-basic-button" variant="warning">
                                            <form action="" onSubmit={handleSubmit} required>
                                                <Dropdown.ItemText>
                                                    New Title
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
                                        <DropdownButton title="Delete" id="dropdown-basic-button" variant="danger">
                                            <form action="" onSubmit={handleSubmit}>
                                                <Dropdown.ItemText>
                                                    Are you sure?
                                                </Dropdown.ItemText>
                                                <Dropdown.ItemText  style={{textAlign:"center"}}>
                                                    <button type="submit" className="btn btn-danger" style={{ marginLeft: '.5rem' }}>
                                                        Delete
                                                    </button>
                                                </Dropdown.ItemText>
                                            </form>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Q&A</td>
                            <td>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-auto">
                                        <DropdownButton title="Edit category" id="dropdown-basic-button" variant="warning">
                                            <form action="" onSubmit={handleSubmit} required>
                                                <Dropdown.ItemText>
                                                    New Title
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
                                        <DropdownButton title="Delete" id="dropdown-basic-button" variant="danger">
                                            <form action="" onSubmit={handleSubmit}>
                                                <Dropdown.ItemText>
                                                    Are you sure?
                                                </Dropdown.ItemText>
                                                <Dropdown.ItemText  style={{textAlign:"center"}}>
                                                    <button type="submit" className="btn btn-danger" style={{ marginLeft: '.5rem' }}>
                                                        Delete
                                                    </button>
                                                </Dropdown.ItemText>
                                            </form>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Cat;