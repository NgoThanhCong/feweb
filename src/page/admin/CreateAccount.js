import React from "react";
import { Button, Container, Form, FormControl, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Header from "../../Header";
import NavBar from "../../NavBar";
export default function CreateAccount() {
  return (
    <>
      <body>
        <header>
          <NavBar />
        </header>
        <br />
        <br />
        <br />
        <div className="container">
          <main role="main" className="pb-3">
            <div className="container col-md-6 text-center mt-3">
              <form
                className="card p-3 bg-light"
                asp-controller="Book"
                asp-action="Add"
                method="post"
              >
                <h3 className="text text-primary">Creater Account</h3>
                <div className="form-group">
                  <label asp-for="name" className="text text-success">
                    Name
                  </label>
                  <input type="text" className="form-control" />
                  <span
                    asp-validation-for="Name"
                    className="text text-danger"
                  ></span>
                </div>
                <div className="form-group">
                  <label for="role" className="text text-success">
                    Role
                  </label>
                  <select
                    for="role"
                    name="role"
                    id="role"
                    className="form-control"
                  >
                    <option>Select one</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                    <option value="qac">QAC</option>
                    <option value="qam">QAM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="" className="text text-success">
                    Department
                  </label>
                  <input for="" className="form-control" />
                  <span
                    asp-validation-for=""
                    className="text text-danger"
                  ></span>
                </div>
                <div className="form-group">
                  <label for="username" className="text text-success">
                    Username
                  </label>
                  <input type="text" className="form-control" />
                  <span
                    asp-validation-for=""
                    className="text text-danger"
                  ></span>
                </div>
                <div className="form-group">
                  <label for="pwd" className="text text-success">
                    Password
                  </label>
                  <input type="password" className="form-control" />
                  <span
                    asp-validation-for=""
                    className="text text-danger"
                  ></span>
                </div>
                <div className="form-group">
                  <label for="Date" className="text text-success">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                  <span
                    asp-validation-for=""
                    className="text text-danger"
                  ></span>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}
