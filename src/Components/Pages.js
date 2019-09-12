import React, { Component } from "react";
import { Router } from "@reach/router";
import Dashboard from "../Components/Dashboard.js";
import CourseStats from "../Components/Course";
import Navigation from "../Components/Navigation";

class Pages extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router id="dashboardContent">
          <Dashboard path="/*" />
          <CourseStats path="/course" />
        </Router>
      </div>
    );
  }
}

export default Pages;
