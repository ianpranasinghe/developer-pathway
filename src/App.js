import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Dashboard from "./Components/Dashboard.js";
import CourseStats from "./Components/Course";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App" id="App">
      <Navigation />
      <Router id="dashboardContent">
        <Dashboard path="/dashboard/students/*" />
        <CourseStats path="/course" />
      </Router>
    </div>
  );
}

export default App;
