import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/c57.gif"
import {BsBoxArrowInRight, BsHandThumbsUp, BsHandThumbsDown} from "react-icons/bs";

function QacIdeas() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} alt="" style={{height:50, width:50}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link active>View Ideas</Nav.Link>
                        <Nav.Link href="https://www.google.com/gmail/about/">Gmail</Nav.Link>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QacIdeas;