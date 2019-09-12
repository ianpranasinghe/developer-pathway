import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home.js";
import Students from "./Components/Students.js";
import CourseStats from "./Components/Course";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <Students path="/students" />
        <CourseStats path="/course" />
      </Router>
    </div>
  );
}

export default App;
