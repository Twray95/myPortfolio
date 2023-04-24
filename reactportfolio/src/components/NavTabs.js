import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <>
      <div className="row text-center h-50">
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
