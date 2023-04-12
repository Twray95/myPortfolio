import React from "react";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
