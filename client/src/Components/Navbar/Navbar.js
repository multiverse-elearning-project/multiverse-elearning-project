import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavbarMenu() {
  return (
    <Navbar bg="dark" expand="lg" className="NavbarContainer">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo-placeholder.png" alt="" className="nav-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="menu-list">Courses</Nav.Link>
            <Nav.Link href="/dashboard" className="menu-list">Progress</Nav.Link>
            <Nav.Link href="/contactus" className="menu-list">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
