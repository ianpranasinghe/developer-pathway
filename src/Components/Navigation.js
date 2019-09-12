import React from "react";
import { Link } from "@reach/router";

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/students">Students</Link>
        <br></br>
        <Link to="/course">Course Statistics</Link>
      </nav>
    </div>
  );
}

export default Navigation;
