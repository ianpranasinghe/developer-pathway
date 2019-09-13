import React from "react";
import { Link } from "@reach/router";
import * as urlRequest from "./urlRequest";

class Navigation extends React.Component {
  state = {
    name: "",
    startingCohort: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      currentState => {
        const newState = { ...currentState, [name]: value };
        return newState;
      },
      () => {
        console.log(this.state, "<----- this state");
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    urlRequest
      .postData(
        "https://nc-student-tracker.herokuapp.com/api/students",
        this.state
      )
      .then(({ student }) => {
        this.props.setTheState(student);
        this.setState(currentState => {
          const newState = { ...currentState, name: "", startingCohort: "" };
          return newState;
        });
      });
  };

  render() {
    return (
      <div className="Navigation" id="navBar">
        <img
          src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_logo.png"
          alt="NorthCoders"
        ></img>
        <div class="navItem">
          <Link to="/">
            <h3>Dashboard</h3>
          </Link>
        </div>
        <div class="navItem">
          <Link to="/course">
            <h3>Course</h3>
          </Link>
        </div>
        <div id="addStudentContainer">
          Add Student
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              placeholder="Full Name"
              name="name"
              value={this.state.name}
            ></input>
            <input
              onChange={this.handleChange}
              placeholder="Starting cohort"
              name="startingCohort"
              value={this.state.startingCohort}
            ></input>
            <button>Add Student</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Navigation;
