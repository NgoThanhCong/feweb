import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Input = styled.input`
  border: none;
  width: 70%;
  outline: none;
  :hover {
    outline: none;
  }
`;

const styles = {
  avatar: {
    margin: "auto",
    width: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0",
  },
  topbarCenter: {
    flex: "5",
  },
  searchbar: {
    width: "70%",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    marginLeft: "120px",
  },
  searchIcon: {
    fontSize: "20px !important",
    marginLeft: "10px",
  },
  searchInput: {
    border: "none",
    width: "70%",
  },
};

export default function NavBar2() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [pass, setPass] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="p-2"
      >
        <Container fluid>
          <NavbarBrand>
            <img
              style={styles.avatar}
              src="https://fpt.edu.vn/Content/images/assets/2022-Greenwich-Eng.jpg"
              alt="FPT Greenwich"
            ></img>
          </NavbarBrand>

          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", fontSize: "20px" }}
              navbarScroll
            >
              <NavLink
                as={Link}
                to={`/StaffIdea`}
                active
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginRight: "10px",
                }}
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to={`/StaffEvent`}
                active
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginRight: "10px",
                }}
              >
                Event
              </NavLink>
              <NavLink as={Link} to={`/StaffCategory`} active>
                Category List
              </NavLink>
              {/* <Form className="d-flex" style={styles.topbarcenter}> */}
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={styles.searchbar}
              />
              <Button variant="outline-success" active>Search</Button>
            </Form>  */}
            </Nav>
            <div style={styles.topbarCenter}>
              <div style={styles.searchbar}>
                <Search style={styles.searchIcon} />
                <Input placeholder="Search" style={styles.searchInput} />
              </div>
            </div>

            <DropdownButton
              id="dropdown-basic-button"
              style={{ marginRight: "100px" }}
              title={<PersonIcon fontSize="large" style={{ color: "white" }} />}
            >
              <Dropdown.Item>
                <Button
                  style={{
                    fontSize: "20px",
                    backgroundColor: "white",
                    border: "none",
                    color: "Black",
                    paddingLeft: "0",
                  }}
                  onClick={() => setProfile(true)}
                >
                  View Profile
                </Button>

                <Modal
                  show={profile}
                  onHide={() => setProfile(false)}
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="text text-primary">
                      Profile
                      <h6 style={{ color: "grey" }}>
                        Update your personal details
                      </h6>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="Form.ControlName">
                        <Form.Label className="text text-primary">
                          Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Form.ControlRole">
                        <Form.Label className="text text-primary">
                          Role
                        </Form.Label>
                        <Form.Select defaultValue="Select one">
                          <option>Select one</option>
                          <option value="1">Staff</option>
                          <option value="2">QAC</option>
                          <option value="3">QAM</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="Form.ControlDepartment"
                      >
                        <Form.Label className="text text-primary">
                          Department
                        </Form.Label>
                        <Form.Control type="text" placeholder="Department" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="Form.ControlUsername"
                      >
                        <Form.Label className="text text-primary">
                          UserName
                        </Form.Label>
                        <Form.Control type="text" placeholder="UserName" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="Form.ControlPassword"
                      >
                        <Form.Label className="text text-primary">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="text text-primary">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@gmail.com"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setProfile(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      as="input"
                      type="submit"
                      value="Save Changes"
                      onClick={() => setProfile(false)}
                    />
                  </Modal.Footer>
                </Modal>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button style={{
                    fontSize: "20px",
                    backgroundColor: "white",
                    border: "none",
                    outline: "none",
                    color: "Black",
                    paddingLeft: "0",
                  }} variant="primary" onClick={() => setPass(true)}>
                  Change password
                </Button>

                <Modal show={pass} onHide={() => setPass(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change The Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlPassword1"
                      >
                        <Form.Label>Curent Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your current password"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlPassword2"
                      >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your new password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setPass(false)}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => setPass(false)}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Dropdown.Item>
              <Dropdown.Item
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NavLink
                  href={`Login`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "40px",
                  }}
                >
                  <LogoutIcon
                    onClick={() => setShow(true)}
                    fontSize="large"
                    style={{ marginRight: "50px" }}
                  />
                  <span
                    onClick={() => setShow(true)}
                    style={{
                      marginLeft: "-45px",
                      fontSize: "20px",
                    }}
                  >
                    Logout
                  </span>
                  <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Log Out</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to log out?</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShow(false)}
                      >
                        No
                      </Button>
                      <Button
                        as={Link}
                        to={`/Login`}
                        variant="primary"
                        onClick={() => setShow(false)}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </NavLink>
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
