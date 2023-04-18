import { Search } from "@mui/icons-material";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { FormControl, NavbarBrand, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

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

export default function NavBar() {
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
              <NavLink as={Link} to={`/AdminIdea`} active style={{ alignItems:"center", justifyContent: "center", display:"flex", marginRight: "10px"}}>
                Home
              </NavLink>
              <NavLink as={Link} to={`/AdminEvent`} active style={{ alignItems:"center", justifyContent: "center", display:"flex", marginRight: "10px"}}>
                Event
              </NavLink>
              <NavLink as={Link} to={`/UserList`} active style={{ alignItems:"center", justifyContent: "center", display:"flex", marginRight: "10px"}}>
                User Manager
              </NavLink>
              <NavLink as={Link} to={`/CreateAccount`} active>
                Create Account
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
            <NavLink
              href={`Login`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "40px"
              }}
            >
              <LogoutIcon
                fontSize="large"
                style={{ color: "white", marginRight: "50px" }}
              />
              <span
                style={{
                  color: "white",
                  marginLeft: "-45px",
                  fontSize: "20px",
                }}
              >
                Logout
              </span>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
