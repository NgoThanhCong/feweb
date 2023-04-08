import React from "react";
import NavBar from "../../NavBar";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { Box } from "@mui/material";
// import "../../css/style2.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { pink } from "@mui/material/colors";

const container = {
  maxWidth: "1100px",
  margin: "auto",
  overflow: "hidden",
  padding: "0 2rem",
  marginTop: "6rem",
  marginBottom: "3rem",
};
const body = {
  fontFamily: "'Raleway', sans-serif",
  fontSize: "1rem",
  lineHeight: "1.6",
  backgroundColor: "#fff",
};
const a = {
  color: "var(--primary-color)",
  textDecoration: "none",
};
const large = {
  fontSize: "3rem",
  lineHeight: "1.2",
  marginBottom: "1rem",
};
const lead = {
  fontSize: "1.5rem",
  marginBottom: "1rem",
};
const postForm = {
  background: "##007bff",
  padding: "0.5rem",
};
const form = {
  margin: "1.2rem 0",
  display: "Block",
  width: "100%",
  padding: "0.4rem",
  fontSize: "1.2rem",
  border: "1px solid #ccc",
};
const post = {

  gridTemplateColumns: "1fr 4fr",
  gridGap: "2rem",
  alignItems: "center",
  width: "100%"
};
const p1 = {
  padding: "1rem",
};
const my1 = {
  margin: "1rem 0",
};

const postp1m1 = {
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gridGap: "2rem",
  alignItems: "center",
  padding: "1rem",
  margin: "1rem 0",
  background: "#fff",
  color: "#333",
  border: "#ccc solid 1px",
};
const roundImg = {
  borderRadius: "50%",
  width: "35%",
};
const postDate = {
  color: '#aaa',
  fontSize: '0.8rem',
  marginBottom: '0.5rem'
};
const btn = {
    display: 'inline-block',
    background: '#f4f4f4',
    color: '#333',
    padding: '0.4rem 1.3rem',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginRight: '0.5rem',
    transition: 'opacity 0.2s ease-in',
    outline: 'none'
}

export default function ViewIdea() {
  return (
    <>
      <body style={body}>
        <header>
          <NavBar />
        </header>

        {/* <Container fluid>
          <div className="my-4">
            <h4 class="mb-3 d-inline-block align-middle">Popular Idea</h4>
            <section>
              <div></div>
            </section>
            <h4 class="mr-3 d-inline-block align-middle">Recent Idea</h4>
          </div>
        </Container> */}
        <section>
          <Container fluid style={container}>
            <div>
              <h1 style={large} className="text-primary">
                Posts
              </h1>
              <p style={lead}>
                <i>Welcome to the community!</i>
              </p>
            </div>

            <div style={postForm}>
              <div
                style={{
                  padding: "0.5rem",
                  background: "##007bff",
                }}
              >
                <h3>Say Something...</h3>
              </div>
              <Form>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="text text-success mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "130px" }}
                  />
                </FloatingLabel>
                <Button type="submit">Submit</Button>
              </Form>
            </div>

            <div style={post}>
              <div style={postp1m1}>
                <div>
                  <a style={a} href="profile.html">
                    <img
                      style={roundImg}
                      src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    />
                    <h4>Thai Son</h4>
                  </a>
                </div>
                <div>
                  <Box>
                  <p style={my1}>Xin chao tat ca cac ban!</p>
                  <p style={postDate}>Posted on 10/03/2023</p>
                  <Button type="button" style={btn}>
                  <ThumbUpIcon color="success"/>
                  <span>1</span>
                  </Button>
                  <Button type="button" style={btn}>
                  <ThumbDownIcon sx={{ color: pink[500] }}/>
                    <span>1</span>
                  </Button>
                  </Box>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </body>
    </>
  );
}
