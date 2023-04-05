import React from "react";
import NavBar from "../../NavBar";
import { Table } from "react-bootstrap";

export default function UserList() {
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
                      <tr className="text-primary">
                        <td>1</td>
                        <td>Nguyen Thai Son</td>
                        <td>Staff</td>
                        <td>???</td>
                        <td>thaison123</td>
                        <td>123456</td>
                        <td>son123@gmail.com</td>
                        <td>
                          <a className="btn btn-warning">Edit</a>
                          <a
                            className="btn btn-danger"
                            onclick=" return confirm('Are you sure to delete this book ?');"
                          >
                            Delete
                          </a>
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
