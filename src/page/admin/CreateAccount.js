import React, { useState } from "react";
import Header from "../../Header";
import NavBar from "../../NavBar";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function CreateAccount() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <body>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <main role="main" className="pb-3 pt-4">
            <div className="container col-md-6 text-center mt-3">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card p-3 bg-light"
                method="post"
              >
                <h3 className="mb-3 text text-primary">Creater Account</h3>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Name"
                  className="text text-success mb-3"
                  htmlFor="inputName"
                >
                  <Form.Control
                    type="text"
                    id="inputName"
                    placeholder="Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Department"
                      className="text text-success mb-3"
                      htmlFor="inputDepartment"
                    >
                      <Form.Control
                        type="text"
                        id="inputDepartment"
                        placeholder="Department"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Role"
                      className="text text-success"
                    >
                      <Form.Select
                        className="text-primary"
                        defaultValue="Select one"
                      >
                        <option>Select one</option>
                        <option value="1">Staff</option>
                        <option value="2">QAC</option>
                        <option value="3">QAM</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Username"
                  className="text text-success mb-3"
                  htmlFor="inputUsername"
                >
                  <Form.Control
                    type="text"
                    id="inputUsername"
                    placeholder="Username"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Username is a required field.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="text text-success mb-3"
                  htmlFor="inputEmail"
                >
                  <Form.Control
                    type="email"
                    id="inputEmail"
                    placeholder="name@gmail.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email is a required field.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="text text-success mb-3"
                  htmlFor="inputPassword"
                >
                  <Form.Control
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    aria-describedby="passwordHelpBlock"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Control.Feedback>
                </FloatingLabel>
                
                <FloatingLabel
                  controlId="floatingConfirmPassword"
                  label="Confirm Password"
                  className="text text-success mb-3"
                  htmlFor="inputConfirmPassword"
                >
                  <Form.Control
                    type="password"
                    id="inputConfirmPassword"
                    placeholder="ConfirmPassword"
                    aria-describedby="passwordHelpBlock"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Control.Feedback>
                  <Form.Text
                    id="passwordHelpBlock"
                    muted
                    style={{ fontSize: "10px" }}
                  >
                    All fields must be filled in.
                  </Form.Text>
                </FloatingLabel>
                <Form.Group as={Row} className="mb-2">
                  <Col sm={{ span: 8, offset: 2 }}>
                    <Button type="submit">
                      Create
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}
