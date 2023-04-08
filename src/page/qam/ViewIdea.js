import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/c57.gif"
import { Link } from "react-router-dom";
import { BsDownload, BsHandThumbsUp, BsHandThumbsDown, BsBoxArrowInRight } from "react-icons/bs";

function QamIdeas() {
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
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} alt="" style={{height:50, width:50}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link active>View Ideas</Nav.Link>
                        <Nav.Link as={Link} to={`/CatEditor`}>Category</Nav.Link>
                        <Nav.Link as={Link} to={`/Dashboard`}>Dashboard</Nav.Link>
                    </Nav>
                    <Nav.Link href={`Login`} style={{alignItems: "center", display:"flex", justifyContent: "center", fontSize:20, width:100, color:"white"}} className="btn btn-danger">
                        <BsBoxArrowInRight/> <a style={{ marginLeft: '.5rem' }}>Logout</a> 
                    </Nav.Link>
                </Container>
            </Navbar>

            <section className="container">
                <h1 className="large text-primary">
                    Posts
                </h1>
                <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

                <div className="post-form">
                    <div className="bg-primary p">
                        <h3>Say Something...</h3>
                    </div>
                    <form className="form my-1">
                        <textarea name="text" cols="30" rows="5" placeholder="Create a post" required style={{display:"flex", outline:"solid", width:"100%"}}></textarea>
                        <input type="submit" className="btn btn-dark my-1" value="Submit" />
                    </form>
                </div>

                <div className="posts">
                    <div className="post bg-white p-1 my-1">
                        <div>
                            <a href="profile.html">
                                <img className="round-img" style={{height:50, width:50}}
                                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                                    alt="" />
                                <h4>Thai Son</h4>
                            </a>
                        </div>

                        <div>
                            <p className="my-1">
                                Xin chao tat ca cac ban!
                            </p>
                            <p className="post-date">
                                Posted on 10/03/2023
                            </p>
                            <button type="button" className="btn btn-light">
                                <i><BsHandThumbsUp/></i>
                                <span>1</span>
                            </button>
                            <button type="button" className="btn btn-light">
                                <i><BsHandThumbsDown/></i>
                                <span>1</span>
                            </button>
                            <button id="downloadBtn" className="btn btn-info" value="download" onClick={downloadTxtFile} style={{alignItems: "center", display:"flex", justifyContent: "center"}}> 
                                <BsDownload/> <a style={{ marginLeft: '.5rem' }}>Download</a> 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QamIdeas;