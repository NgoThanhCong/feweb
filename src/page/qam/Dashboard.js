import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";
import {BsBoxArrowInRight} from "react-icons/bs";

function Dashboard() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} alt="" style={{height:50, width:50}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`/`}>View Ideas</Nav.Link>
                        <Nav.Link as={Link} to={`/CatEditor`}>Category</Nav.Link>
                        <Nav.Link active>Dashboard</Nav.Link>
                    </Nav>
                    <Nav.Link href={`Login`} style={{alignItems: "center", display:"flex", justifyContent: "center", fontSize:20, width:100, color:"white"}} className="btn btn-danger">
                        <BsBoxArrowInRight/> <a style={{ marginLeft: '.5rem' }}>Logout</a> 
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Dashboard;