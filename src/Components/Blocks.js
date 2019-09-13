import React, { Component } from "react";
import { Link } from "@reach/router";
import * as urlRequest from "./urlRequest";

class Blocks extends Component {
  state = {
    newStudent: "",
    studentCount: { fun: 0, be: 0, fe: 0, proj: 0, grad: 0, all: 0 }
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
  componentDidMount() {
    window.scrollTo(0, 0);
    urlRequest.getData("students").then(data => {
      this.setState(currentState => {
        const studentCount = this.studentCount(data.students);
        const newState = {
          ...currentState,

          studentCount
        };

        return newState;
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.newStudent !== this.props.newStudent ||
      prevProps.addedStudent !== this.props.addedStudent
    ) {
      window.scrollTo(0, 0);
      urlRequest.getData("students").then(data => {
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
  }

  render() {
    return (
      <div id="blocks">
        <Link className="blockList" to="/students/blocks/fun">
          <button
            onClick={this.props.filterState}
            className="blockCard"
            key="fun"
            name="fun"
          >
            <i name="fun" className="fas fa-cubes"></i>
            <p className="numberOfStudents" name="fun">
              {this.state.studentCount.fun}
            </p>
            <p className="Students" name="fun">
              Students
            </p>
            <h4 name="fun">Fundamentals</h4>
          </button>
        </Link>

        <Link className="blockList" to="/students/blocks/be">
          <button
            className="blockCard"
            key="be"
            onClick={this.props.filterState}
            name="be"
          >
            <i name="be" className="fas fa-database"></i>
            <p name="be" className="numberOfStudents">
              {this.state.studentCount.be}
            </p>
            <p name="be" className="Students">
              Students
            </p>
            <h4 name="be"> Back End</h4>
          </button>
        </Link>

        <Link className="blockList" to="/students/blocks/fe">
          <button
            onClick={this.props.filterState}
            className="blockCard"
            key="fe"
            name="fe"
          >
            <i className="fas fa-desktop" name="fe"></i>
            <p className="numberOfStudents" name="fe">
              {this.state.studentCount.fe}
            </p>
            <p className="Students" name="fe">
              Students
            </p>
            <h4 name="fe">Front End</h4>
          </button>
        </Link>
        <Link className="blockList" to="/students/blocks/proj">
          <button
            onClick={this.props.filterState}
            className="blockCard"
            key="proj"
            name="proj"
          >
            <i className="fas fa-project-diagram" name="proj"></i>
            <p className="numberOfStudents" name="proj">
              {this.state.studentCount.proj}
            </p>
            <p className="Students" name="proj">
              Students
            </p>
            <h4 name="proj">Projects</h4>
          </button>
        </Link>
        <Link className="blockList" to="/students/blocks/grad">
          <button
            onClick={this.props.filterState}
            className="blockCard"
            key="grad"
            name="grad"
          >
            <i className="fas fa-graduation-cap" name="grad"></i>
            <p className="numberOfStudents" name="grad">
              {this.state.studentCount.grad}
            </p>
            <p className="Students" name="grad">
              Students
            </p>
            <h4 name="grad"> Graduates</h4>
          </button>
        </Link>
        <Link className="blockList" to="/students">
          <button
            onClick={this.props.filterState}
            className="blockCard"
            key="all"
            name="all"
          >
            <i className="fas fa-users" name="proj"></i>
            <p className="numberOfStudents" name="all">
              {this.state.studentCount.all}
            </p>
            <p className="Students" name="all">
              Students
            </p>
            <h4 name="grad"> All Students</h4>
          </button>
        </Link>
      </div>
    );
  }
}

export default Blocks;
