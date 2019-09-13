import React from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";
import Dashboard from "./Components/Dashboard.js";
import CourseStats from "./Components/Course";
import Navigation from "./Components/Navigation";

class App extends React.Component {
  state = {
    newStudent: ""
  };

  setTheState = newStudent => {
    this.setState(currentState => {
      const newState = { ...currentState, newStudent };
      return newState;
    });
  };

  render() {
    return (
      <div className="App" id="App">
        <Navigation setTheState={this.setTheState} />
        <Router id="dashboardContent">
          <Redirect noThrow from="/" to="/students" />
          <Dashboard path="/students/*" newStudent={this.state.newStudent} />
          <CourseStats path="/course" />
        </Router>
      </div>
    );
  }
}

export default App;
