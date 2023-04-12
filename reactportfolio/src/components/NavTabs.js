import React from "react";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <>
      <div className="row text-center">
        <div className="col">Thomas Wray</div>
        <ul className="nav nav-tabs col justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Work">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavTabs;
