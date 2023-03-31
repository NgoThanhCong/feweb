import React from "react";

export default function UserList() {
  return (
    <>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                FPT Greenwich
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div style={{ paddingLeft: "30px" }}></div>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="ViewIdea.html">
                      Create event
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="CreateAccount.html">
                      Create Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="User.html">
                      User
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
                <li className="nav nav-item">
                  <a href="login.html" title="Logout">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                  </a>
                </li>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
          <main role="main" className="pb-3">
            <div className="container text-center mt-3">
              <div className="row my-5">
                <h3 className="text text-success text-center">User List</h3>
                <div className="col">
                  <table className="table table-bordered">
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
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
        <hr />
        <footer className="border-top footer text-muted">
          <div className="container text-center">
            <span className="alert alert-primary">FPT Greenwich</span>
          </div>
        </footer>
        <script src="/lib/jquery/dist/jquery.min.js"></script>
        <script src="/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/js/site.js?v=BxFAw9RUJ1E4NycpKEjCNDeoSvr4RPHixdBq5wDnkeY"></script>
      </body>
    </>
  );
}
