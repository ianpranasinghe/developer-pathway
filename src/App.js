import React from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";
import Dashboard from "./Components/Dashboard.js";
import CourseStats from "./Components/Course";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App" id="App">
      {" "}
      <Navigation />
      <Router id="dashboardContent">
        <Redirect noThrow from="/" to="/students" />
        <Dashboard path="/students/*" />
        <CourseStats path="/course" />
      </Router>
    </div>
  );
}

export default App;
