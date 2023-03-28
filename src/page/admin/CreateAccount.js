import React from "react";

export default function CreateAccount() {
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
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  <select for="role" name="role" id="role" className="form-control">
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
                  <span asp-validation-for="" className="text text-danger"></span>
                </div>
                <div className="form-group">
                  <label for="username" className="text text-success">
                    Username
                  </label>
                  <input type="text" className="form-control" />
                  <span asp-validation-for="" className="text text-danger"></span>
                </div>
                <div className="form-group">
                  <label for="pwd" className="text text-success">
                    Password
                  </label>
                  <input type="password" className="form-control" />
                  <span asp-validation-for="" className="text text-danger"></span>
                </div>
                <div className="form-group">
                  <label for="Date" className="text text-success">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                  <span asp-validation-for="" className="text text-danger"></span>
                </div>
                <br />
                <div className="form-group">
                  <input type="submit" className="btn btn-primary" value="Add" />
                </div>
              </form>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}
