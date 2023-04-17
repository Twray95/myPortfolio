import React from "react";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <>
      <div className="row text-center">
        <div className="col">Thomas Wray</div>

        <Link className="col" to="/">
          Home
        </Link>

        <Link className="col" to="/Work">
          Work
        </Link>

        <Link className="col" to="/Contact">
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavTabs;
