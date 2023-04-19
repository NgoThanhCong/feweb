import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  FormControl,
  Modal,
  Row,
} from "react-bootstrap";
import { Box } from "@mui/material";
// import "../../css/style2.css"
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { pink } from "@mui/material/colors";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from '@mui/icons-material/Sort';
import CommentIcon from '@mui/icons-material/Comment';
import NavBar2 from "../../NavBar2";

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

export default function StaffIdea() {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState(false);
  const [like, setlike] = useState(32);
  const [likeactive, setlikeactive] = useState(false);

  const [dislike, setdislike] = useState(12);
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
      <NavBar2 />
      <Container className="mt-3" fluid style={container}>
        <section style={styles.section}>
          <h1 className="text-center">Ideas</h1>
          <DropdownButton
            style={{
              position: "fixed",
              marginLeft: "-50px",
            }}
            as={ButtonGroup}
            title={<FilterAltIcon />}
            id="bg-nested-dropdown"
          >
            {" "}
            <span style={{ marginLeft: "17px" }}>Filter by:</span>
            <Dropdown.Item style={{ color: "blue" }} eventKey="1">
              Department:
              <Dropdown.Item>IT</Dropdown.Item>
              <Dropdown.Item>Business</Dropdown.Item>
              <Dropdown.Item>Designer</Dropdown.Item>
            </Dropdown.Item>
            <Dropdown.Item style={{ color: "blue" }} eventKey="2">
              Category:
              <Dropdown.Item>Festival</Dropdown.Item>
              <Dropdown.Item>Food</Dropdown.Item>
              <Dropdown.Item>Expo</Dropdown.Item>
              <Dropdown.Item>Household</Dropdown.Item>
              <Dropdown.Item>Concert</Dropdown.Item>
              <Dropdown.Item>Music</Dropdown.Item>
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            style={{
              position: "fixed",
              marginLeft: "50px",
            }}
            as={ButtonGroup}
            title={<SortIcon />}
            id="bg-nested-dropdown"
          >
            {" "}
            <span style={{ marginLeft: "17px" }}>Sorted by:</span>
            <Dropdown.Item style={{ color: "blue" }} eventKey="1">
              Date range:
              <Form.Group className="mb-1 mt-1" controlId="Form.ControlDate">
                <Form.Control type="date" />
              </Form.Group>
            </Dropdown.Item>
            <Dropdown.Item style={{ color: "blue" }} eventKey="2">
              Most Like
            </Dropdown.Item>
            <Dropdown.Item style={{ color: "blue" }} eventKey="3">
              Most Dislike
            </Dropdown.Item>
          </DropdownButton>
          <Button
            style={{
              fontSize: "20px",
              position: "fixed",
              top: "150px",
              right: "200px",
            }}
            variant="success"
            onClick={() => setShow(true)}
          >
            Submit Idea
          </Button>
          <Modal
            size="auto"
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text text-primary">
                Submit Your New Idea
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="Form.ControlRole">
                  <Form.Label className="text text-primary">
                    Category
                  </Form.Label>
                  <Form.Select defaultValue="Select one">
                    <option>Select one</option>
                    <option value="1">Festival</option>
                    <option value="2">Food</option>
                    <option value="3">Expo</option>
                    <option value="4">Household</option>
                    <option value="5">Concert</option>
                    <option value="6">Music</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlName">
                  <Form.Label className="text text-primary">
                    Title of idea
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title of idea"
                    autoFocus
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="Form.ControlDescription"
                >
                  <Form.Label className="text text-primary">
                    Description
                  </Form.Label>
                  <Form.Control
                    type="description"
                    as="textarea"
                    placeholder="Description of idea"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormFile">
                  <Form.Label className="text text-primary">
                    Attach images or documents
                  </Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Modal.Body>
          </Modal>
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
