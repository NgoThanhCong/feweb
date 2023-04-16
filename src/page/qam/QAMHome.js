import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";
import {BsBoxArrowInRight, BsSearch } from "react-icons/bs";

function QamIdeas() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} alt="" style={{height:50, width:50}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link active>Home</Nav.Link>
                        <Nav.Link as={Link} to={`/CatEditor`}>Category</Nav.Link>
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

            <section className="container">
                
            </section>
        </>
    )
}

export default QamIdeas;