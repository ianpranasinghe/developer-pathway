import React from "react";
import Students from "./Students";
import FilteredStudent from "./FilteredStudent";
import Blocks from "./Blocks";
import { Router } from "@reach/router";
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
        this.setState(
          currentState => {
            const newState = { ...currentState, students: data.students };
            return newState;
          },
          () => {
            console.log("Mounting");
            console.log(this.state);
          }
        );
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      urlRequest
        .getData(
          `https://nc-student-tracker.herokuapp.com/api/blocks/${this.state.filter}/students`
        )
        .then(data => {
          this.setState(
            currentState => {
              const newState = {
                ...currentState,
                students: data.students,
                filter: ""
              };
              return newState;
            },
            () => {
              console.log("Mounting");
              console.log(this.state);
            }
          );
        });
    }
  }

  filterState = event => {
    const { id } = event.target;
    console.log(id);
    this.setState({ filter: id, students: [] });
  };

  render() {
    const { students } = this.state;
    if (this.state.filter.length > 0) {
      return (
        <>
          <h2 id="dashboardHeader">Dashboard</h2>
          <Blocks filterState={this.filterState} />

          <Router>
            <FilteredStudent path="/:slug" students={students} />
          </Router>
        </>
      );
    }
    if (this.state.students.length > 0) {
      return (
        <>
          <h2 id="dashboardHeader">Dashboard</h2>
          <Blocks filterState={this.filterState} />
          <Students students={students} />
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
