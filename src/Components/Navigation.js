import React from "react";
import { Link } from "@reach/router";

function Navigation() {
  return (
    <div className="Navigation" id="navBar">
      <img
        src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png"
        alt="NorthCoders"
      ></img>
      <div className="navItem">
        <Link to="/">Student Dashboard</Link>
      </div>
      <div className="navItem">
        <Link to="/course">Course Statistics</Link>
      </div>
    </div>
  );
}

export default Navigation;
