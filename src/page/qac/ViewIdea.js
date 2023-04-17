import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsDownload, BsHandThumbsUp, BsHandThumbsDown, BsBoxArrowInRight, BsSearch } from "react-icons/bs";

const styles = {
    avatar: {
      margin: "auto",
      width: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0",
    }
}

function QacIdeas() {
    //Like, Dislike function
    const [like, setLike] = useState(10);
    const [dislike, setDislike] = useState(2);

    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    function likefunc()
    {
        if(likeActive)
        {
            setLikeActive(false);
            setLike(like - 1);
        }
        else
        {
            setLikeActive(true);
            setLike(like + 1);
            if(dislikeActive)
            {
                setDislikeActive(false);
                setLike(like + 1);
                setDislike(dislike - 1);
            }
        }
    }
    function dislikefunc()
    {
        if(dislikeActive)
        {
            setDislikeActive(false);
            setDislike(dislike - 1);
        }
        else
        {
            setDislikeActive(true);
            setDislike(dislike + 1);
            if(likeActive)
            {
                setLikeActive(false);
                setDislike(dislike + 1);
                setLike(like - 1);
            }
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img src="https://fpt.edu.vn/Content/images/assets/2022-Greenwich-Eng.jpg" alt="" style={styles.avatar} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link active>View Ideas</Nav.Link>
                        <Nav.Link href="https://www.google.com/gmail/about/">Gmail</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search"/>
                        <Button variant="dark" className="me-5">
                            <BsSearch/>
                        </Button>
                    </Form>
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
                    <div>
                        <h3>Say Something...</h3>
                    </div>
                    <form className="form my-1">
                        <textarea name="text" cols="30" rows="5" placeholder="Create a post" required style={{display:"flex", outline:"solid", width:"100%"}}></textarea>
                        <input type="submit" className="btn btn-dark my-1" value="Submit" />
                    </form>
                </div>

                <div className="posts">
                    <div className="post bg-white p-1 my-1" style={{display:"flex", outline:"2px solid green", width:"100%"}}>
                        <div>
                            <a href="profile.html">
                                <img className="round-img" style={{height:75, width:75}}
                                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                                    alt="" />
                                <h4>Thai Son</h4>
                            </a>
                        </div>

                        <div style={{ marginLeft:10 }}>
                            <p className="my-1">
                                Xin chao tat ca cac ban!
                            </p>
                            <p className="post-date">
                                Posted on 10/03/2023
                            </p>
                            <button onClick={likefunc} type="button" className="btn btn-light"  style={{ backgroundColor: likeActive ? "aqua" : "white" }}>
                                <BsHandThumbsUp/>{like}
                            </button>
                            <button onClick={dislikefunc} type="button" className="btn btn-light" style={{ backgroundColor: dislikeActive ? "crimson" : "white" }}>
                                <BsHandThumbsDown/>{dislike}
                            </button>
                            <button className="btn btn-info" value="download" style={{alignItems: "center", display:"flex", justifyContent: "center"}}> 
                                <BsDownload/> <a style={{ marginLeft: '.5rem' }}>Download</a> 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QacIdeas;