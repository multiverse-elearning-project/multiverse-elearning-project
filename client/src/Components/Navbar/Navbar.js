import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { Navtext } from "../DynamicData";
function NavbarMenu() {
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
            <Nav.Link href="/dashboard" className="menu-list">
              {Navtext.Courseprogress}
            </Nav.Link>
            <Nav.Link href="/newcourse" className="menu-list">
              {Navtext.newCourse}
            </Nav.Link>
            <Nav.Link href="/contactus" className="menu-list">
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
