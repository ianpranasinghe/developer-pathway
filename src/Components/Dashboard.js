import React from "react";
import Students from "./Students";
import FilteredStudent from "./FilteredStudent";
import Blocks from "./Blocks";
import { Link, Router } from "@reach/router";
import * as urlRequest from "./urlRequest";
import InfiniteScroll from "react-infinite-scroller";

class Dashboard extends React.Component {
  state = {
    students: [],
    filter: "",
    updated: false,
    newStudent: this.props.newStudent,
    studentCount: { fun: 0, be: 0, fe: 0, proj: 0, grad: 0, all: 0 }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    urlRequest
      .getData("https://nc-student-tracker.herokuapp.com/api/students")
      .then(data => {
        this.setState(currentState => {
          const studentCount = this.studentCount(data.students);
          const newState = {
            ...currentState,
            students: data.students,
            studentCount
          };

          return newState;
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
    console.log(this.state, "<---New Student");
    if (
      prevProps.filter !== this.state.filter ||
      prevState.updated !== this.state.updated ||
      prevProps.newStudent !== this.props.newStudent
    ) {
      console.log(this.state, "<------stuff");
      urlRequest
        .getData(
          `https://nc-student-tracker.herokuapp.com/api/${
            this.state.filter ? `blocks/${this.state.filter}/` : ""
          }students`
        )
        .then(data => {
          this.setState(currentState => {
            const studentCount = this.studentCount(data.students);
            const newState = {
              ...currentState,
              students: data.students,
              updated: false,
              studentCount,
              filter: prevProps.filter
            };
            return newState;
          });
        });
    }
  }

  filterState = event => {
    const { name } = event.target;
    console.log(name);
    if (name !== this.state.filter) {
      console.log("hello");
      this.setState(currentState => {
        const newState = { ...currentState, filter: name, students: [] };
        return newState;
      });
    }
  };

  resetState = () => {
    this.setState(currentState => {
      const newState = { ...currentState, updated: true };
      return newState;
    });
  };

  studentCount = students => {
    const newObj = students.reduce(
      (newObj, student) => {
        newObj.all++;
        newObj[student.currentBlock]++;
        return newObj;
      },
      {
        fun: 0,
        be: 0,
        fe: 0,
        proj: 0,
        grad: 0,
        all: 0
      }
    );
    return newObj;
  };

  render() {
    const { students, updated, studentCount } = this.state;
    if (this.state.students.length > 0) {
      return (
        <>
          <h2 id="dashboardHeader">Developer Pathway</h2>
          <Blocks filterState={this.filterState} studentCount={studentCount} />
          <div id="toggle">
            <Link to="/students" id="toggle">
              <button onClick={this.filterState} class="allStudents" id="">
                All
              </button>
            </Link>
          </div>

          <Router>
            <FilteredStudent
              path="/blocks/:slug/*"
              resetState={this.resetState}
              updated={updated}
              students={students}
            />
            <Students
              path="/*"
              resetState={this.resetState}
              updated={updated}
              students={students}
            />
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
