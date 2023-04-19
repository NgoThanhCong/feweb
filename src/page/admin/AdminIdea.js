import React, { useState } from "react";
import NavBar from "../../NavBar";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  Modal,
  Row,
} from "react-bootstrap";
import { Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { pink } from "@mui/material/colors";
import CommentIcon from '@mui/icons-material/Comment';

const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#fff",
    padding: "0 2em",
  },
  wrapper: {
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    border: "5px solid #e6e6e6",
    padding: "40px 25px",
    marginBottom: "20px",
    paddingBottom: "0",
  },
  avatar: {
    margin: "-40px auto 0px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  quote: {
    lineHeight: 1.5,
    fontWeight: 300,
    marginBottom: "25px",
    fontSize: "1.375rem",
  },
  name: {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1rem",
  },
  position: {
    fontWeight: 400,
    marginTop: "-5px",
  },
  body: {
    fontFamily: ("Montserrat", "sans-serif"),
    lineHeight: "1.7",
    color: "#333",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
  },
  accordion: {
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    border: "none",
    padding: "40px 25px",
    marginBottom: "20px",
    paddingBottom: "10px",
  },
  postDate: {
    fontFamily: "'Lora', serif",
    fontStyle: "italic",
    fontSize: "13px",
    fontWeight: "400",
    color: "#999999",
  },
};
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
  fontSize: "1.5rem",
  border: "1px solid #ccc",
};
const post = {
  alignItems: "center",
  width: "70%",
};
const p1 = {
  padding: "1rem",
};
const my1 = {
  margin: "1rem 0",
  fontSize: "20px",
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
  width: "50%",
};
const postDate = {
  color: "#aaa",
  fontSize: "0.8rem",
  marginBottom: "0.5rem",
};
const btn = {
  display: "inline-block",
  background: "#f4f4f4",
  color: "#333",
  padding: "0.4rem 1.3rem",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  marginRight: "0.5rem",
  transition: "opacity 0.2s ease-in",
  outline: "none",
};

export default function AdminIdea() {
  const [comment, setComment] = useState(false);
  const [like, setlike] = useState(20);
  const [likeactive, setlikeactive] = useState(false);

  const [dislike, setdislike] = useState(5);
  const [dislikeactive, setdislikeactive] = useState(false);

  function likef() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(like + 1);
        setdislike(dislike - 1);
      }
    }
  }

  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  }

  return (
    <>
      <NavBar />
      <Container className="mt-3" fluid style={container}>
        <section style={styles.section}>
          <h1 className="text-center">Recent Ideas</h1>

          <center>
            <div style={post}>
              <div style={postp1m1}>
                <div>
                  <img
                    style={roundImg}
                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                  />
                </div>
                <div>
                  <Box>
                    <p style={my1}>Lorem ipsum dolor sit amet.</p>
                    <p style={postDate}>Posted on 10/03/2023</p>
                    <Button type="button" style={btn} onClick={likef}>
                      <ThumbUpIcon color="success" />
                      <span>{like}</span>
                    </Button>
                    <Button type="button" style={btn} onClick={dislikef}>
                      <ThumbDownIcon sx={{ color: pink[500] }} />
                      <span>{dislike}</span>
                    </Button>
                    <Button
                      type="button"
                      style={btn}
                      onClick={() => setComment(true)}
                    >
                      <CommentIcon />
                    </Button>
                    <Modal size="lg" show={comment} onHide={() => setComment(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Comments</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet.
                                </p>
                                <p style={postDate}>Posted on 15/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                                <p style={postDate}>Posted on 08/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Morbi vel tortor ornare, luctus risus eget, fringilla.
                                </p>
                                <p style={postDate}>Posted on 11/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="comment"
                            placeholder="Write a comment"
                            autoFocus
                            size="lg"
                          />
                        </Form.Group>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setComment(false)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Box>
                </div>
              </div>
            </div>

            <div style={post}>
              <div style={postp1m1}>
                <div>
                  <img
                    style={roundImg}
                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                  />
                </div>
                <div>
                  <Box>
                    <p style={my1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam ac blandit ligula. Nam molestie tempor.
                    </p>
                    <p style={postDate}>Posted on 15/04/2023</p>
                    <Button type="button" style={btn} onClick={likef}>
                      <ThumbUpIcon color="success" />
                      <span>{like}</span>
                    </Button>
                    <Button type="button" style={btn} onClick={dislikef}>
                      <ThumbDownIcon sx={{ color: pink[500] }} />
                      <span>{dislike}</span>
                    </Button>
                    <Button
                      type="button"
                      style={btn}
                      onClick={() => setComment(true)}
                    >
                      <CommentIcon />
                    </Button>
                    <Modal size="lg" show={comment} onHide={() => setComment(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Comments</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet.
                                </p>
                                <p style={postDate}>Posted on 15/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                                <p style={postDate}>Posted on 08/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Morbi vel tortor ornare, luctus risus eget, fringilla.
                                </p>
                                <p style={postDate}>Posted on 11/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="comment"
                            placeholder="Write a comment"
                            autoFocus
                            size="lg"
                          />
                        </Form.Group>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setComment(false)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Box>
                </div>
              </div>
            </div>

            <div style={post}>
              <div style={postp1m1}>
                <div>
                  <img
                    style={roundImg}
                    src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                  />
                </div>
                <div>
                  <Box>
                    <p style={my1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam aliquam maximus ultricies. Nulla tempor nisl dolor,
                      vel eleifend metus molestie at. Nulla commodo ante quis.
                    </p>
                    <p style={postDate}>Posted on 19/04/2023</p>
                    <Button type="button" style={btn} onClick={likef}>
                      <ThumbUpIcon color="success" />
                      <span>{like}</span>
                    </Button>
                    <Button type="button" style={btn} onClick={dislikef}>
                      <ThumbDownIcon sx={{ color: pink[500] }} />
                      <span>{dislike}</span>
                    </Button>
                    <Button
                      type="button"
                      style={btn}
                      onClick={() => setComment(true)}
                    >
                      <CommentIcon />
                    </Button>
                    <Modal size="lg" show={comment} onHide={() => setComment(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Comments</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet.
                                </p>
                                <p style={postDate}>Posted on 15/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                                <p style={postDate}>Posted on 08/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                          <div style={postp1m1}>
                            <div>
                              <img
                                style={roundImg}
                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                              />
                            </div>
                            <div style={{margin: "-15px"}}>
                              <Box>
                                <p style={my1}>
                                Morbi vel tortor ornare, luctus risus eget, fringilla.
                                </p>
                                <p style={postDate}>Posted on 11/04/2023</p>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={likef}
                                >
                                  <ThumbUpIcon color="success" />
                                  <span>{like}</span>
                                </Button>
                                <Button
                                  type="button"
                                  style={btn}
                                  onClick={dislikef}
                                >
                                  <ThumbDownIcon sx={{ color: pink[500] }} />
                                  <span>{dislike}</span>
                                </Button>
                              </Box>
                            </div>
                          </div>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="comment"
                            placeholder="Write a comment"
                            autoFocus
                            size="lg"
                          />
                        </Form.Group>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setComment(false)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Box>
                </div>
              </div>
            </div>
          </center>
        </section>
      </Container>
    </>
  );
}
