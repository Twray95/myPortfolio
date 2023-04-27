import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function NavTabs() {
  return (
    <div className="navContainer">
      <img src="./logo.png" className="logo" />
      <Nav variant="tabs light" className="Navigation h-100 align-items-end">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link eventKey="/home">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/Work">
            <Nav.Link eventKey="work">Work</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/Contact">
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavTabs;
