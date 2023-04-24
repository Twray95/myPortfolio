import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function NavTabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="Navigation">
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
  );
}

export default NavTabs;

{
  /* <Nav variant="tabs" defaultActiveKey="/">
<Nav.Item>
  <Nav.Link>
    <Link className="col" to="/">
      Home
    </Link>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
    <Link className="col" to="/Work">
      Work
    </Link>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
    <Link className="col" to="/Contact">
      Contact
    </Link>
  </Nav.Link>
</Nav.Item>
</Nav> */
}
