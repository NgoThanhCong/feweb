import React, { useState } from "react";
import NavBar from "../../NavBar";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { colors } from "@mui/material";

export default function UserList() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <body>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <main role="main" className="pb-3">
            <div className="container text-center mt-3">
              <div className="row my-5">
                <h3 className="text text-success text-center">User List</h3>
                <br />
                <br />
                <br />
                <br />
                <div className="col">
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr className="text-primary">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nguyen Thai Son</td>
                        <td>Staff</td>
                        <td>???</td>
                        <td>thaison123</td>
                        <td>123456</td>
                        <td>son123@gmail.com</td>
                        <td>
                          <Button
                            href="#"
                            variant="outline-success"
                            onClick={() => setEdit(true)}
                          >
                            Edit
                          </Button>{" "}
                          <Modal
                            size="sm"
                            show={edit}
                            onHide={() => setEdit(false)}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="text text-primary">
                                Edit Account
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="Form.ControlName"
                                >
                                  <Form.Label className="text text-primary">
                                    Name
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                    autoFocus
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="Form.ControlRole"
                                >
                                  <Form.Label className="text text-primary">
                                    Role
                                  </Form.Label>
                                  <Form.Select defaultValue="Select one">
                                    <option>Select one</option>
                                    <option value="1">Staff</option>
                                    <option value="2">Admin</option>
                                    <option value="3">QAC</option>
                                    <option value="4">QAM</option>
                                  </Form.Select>
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="Form.ControlDepartment"
                                >
                                  <Form.Label className="text text-primary">
                                    Department
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Department"
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="Form.ControlUsername"
                                >
                                  <Form.Label className="text text-primary">
                                    UserName
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="UserName"
                                  />
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
                                onClick={() => setEdit(false)}
                              >
                                Close
                              </Button>
                              <Button variant="primary">Save Changes</Button>
                            </Modal.Footer>
                          </Modal>
                          <Button
                            href="#"
                            variant="outline-danger"
                            onClick={handleShow}
                          >
                            Delete
                          </Button>{" "}
                          {/* <Button as="input" type="button" value="Input" />{" "}
                          <Button as="input" type="submit" value="Submit" />{" "}
                          <Button as="input" type="reset" value="Reset" />
                          <Button
                            className="btn btn-danger"
                            onclick=" return confirm('Are you sure to delete this account ?');"
                          >
                            Delete
                          </Button> */}
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Notification</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Are you sure to delete this account ?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancer
                              </Button>
                              <Button variant="primary">OK</Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* <hr /> */}
        {/* <footer className="border-top footer text-warning">
          <div className="container text-center">
            <span className="alert alert-primary">FPT Greenwich</span>
          </div>
        </footer>   */}
      </body>
    </>
  );
}
