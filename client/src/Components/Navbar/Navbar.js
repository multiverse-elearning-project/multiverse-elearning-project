import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { Navtext } from "../DynamicData";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";
function NavbarMenu() {
  const { auth } = useContext(MultiverseContext);
  const loggedInUser = auth?.data?.role;
  const isInstructorOrAdmin =
    loggedInUser === "instructor" || loggedInUser === "admin";
  console.log(auth);
  return (
    <Navbar bg="dark" expand="lg" className="NavbarContainer">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo1.png" alt="" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="humberger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="menu-list">
              {Navtext.navigateCourses}
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="menu-list">
              {Navtext.Courseprogress}
            </Nav.Link>
            {isInstructorOrAdmin && (
              <Nav.Link as={Link} to="/newcourse" className="menu-list">
                {Navtext.newCourse}
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/contactus" className="menu-list">
              {Navtext.gotoContactUsPage}
            </Nav.Link>
            <Nav.Link href="/" className="menu-list dispbtn">
              {Navtext.Signout}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Avatar />
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
