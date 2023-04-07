import React from "react";
import NavBar from "../../NavBar";
import { Col, Container, Row } from "react-bootstrap";


export default function ViewIdea() {
  return (
    <>
      <body>
        <header>
          <NavBar />
        </header>

        <Container fluid>
        <div className="my-4">
        <h4 class="mb-3 d-inline-block align-middle">Popular Idea</h4>
        <section>
            <div></div>
        </section>
        <h4 class="mr-3 d-inline-block align-middle">Recent Idea</h4>
        </div>
    </Container>
        <section>
            <div className="container">
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i>Welcome to the community!</i> 
          </p>

          <div className="post-form">
            <div className="bg-primary p">
              <h3>Say Something...</h3>
            </div>
            <form className="form my-1">
              <textarea
                name="text"
                cols="30"
                rows="5"
                placeholder="Create a post"
                required
              ></textarea>
              <input
                type="submit"
                className="btn btn-dark my-1"
                value="Submit"
              />
            </form>
          </div>

          <div className="posts">
            <div className="post bg-white p-1 my-1">
              <div>
                <a href="profile.html">
                  <img
                    className="round-img"
                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    alt=""
                  />
                  <h4>Thai Son</h4>
                </a>
              </div>

              <div>
                <p className="my-1">Xin chao tat ca cac ban!</p>
                <p className="post-date">Posted on 10/03/2023</p>
                <button type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-up"></i>
                  <span>1</span>
                </button>
                <button type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-down"></i>
                  <span>1</span>
                </button>
                <button type="button" className="btn btn-danger">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </body>
    </>
  );
}
