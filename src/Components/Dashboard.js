import React from "react";
import Students from "./Students";
import FilteredStudent from "./FilteredStudent";
import Blocks from "./Blocks";
import { Link, Router } from "@reach/router";
import * as urlRequest from "./urlRequest";

class Dashboard extends React.Component {
  state = {
    students: [],
    filter: ""
  };

  componentDidMount() {
    urlRequest
      .getData("https://nc-student-tracker.herokuapp.com/api/students")
      .then(data => {
        this.setState(currentState => {
          const newState = { ...currentState, students: data.students };
          return newState;
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      urlRequest
        .getData(
          `https://nc-student-tracker.herokuapp.com/api/${
            this.state.filter ? `blocks/${this.state.filter}/` : ""
          }students`
        )
        .then(data => {
          this.setState(currentState => {
            const newState = {
              ...currentState,
              students: data.students,
              filter: ""
            };
            return newState;
          });
        });
    }
  }

  filterState = event => {
    const { id } = event.target;
    this.setState({ filter: id, students: [] });
  };

  render() {
    const { students } = this.state;
    if (this.state.students.length > 0) {
      return (
        <>
          <h2 id="dashboardHeader">Dashboard</h2>
          <Blocks filterState={this.filterState} />
          <div id="toggle">
            <Link to="/">
              <button>All</button>
            </Link>
          </div>

          <Router>
            <FilteredStudent path="/:slug" students={students} />
            <Students path="/" students={students} />
          </Router>
        </>
      );
    } else {
      return (
        <div className="Students">
          <h2 id="dashboardHeader">Dashboard</h2>
          <Blocks filterState={this.filterState} />
          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default Dashboard;
