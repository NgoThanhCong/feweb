import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";

function Ideas() {
    const downloadTxtFile = () => {
        // text content
        const texts = ["line 1", "line 2", "line 3"]
    
       // file object
        const file = new Blob(texts, {type: 'text/plain'});
    
       // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "100ideas-" + Date.now() + ".txt";
    
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    
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
        <div className="btnDiv">
            <button id="downloadBtn" className="btn btn-info" value="download" onClick={downloadTxtFile}>Download</button>
        </div>

        </>
    )
}

export default Ideas;