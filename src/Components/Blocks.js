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
    if (prevProps.newStudent !== this.props.newStudent) {
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
        <Link class="blockList" to="blocks/fun">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fun"
            name="fun"
          >
            <i name="fun" class="fas fa-cubes"></i>
            <p class="numberOfStudents" name="fun">
              {this.state.studentCount.fun}
            </p>
            <p class="Students" name="fun">
              Students
            </p>
            <h4 name="fun">Fundamentals</h4>
          </button>
        </Link>

        <Link class="blockList" to="blocks/be">
          <button
            class="blockCard"
            key="be"
            onClick={this.props.filterState}
            name="be"
          >
            <i name="be" class="fas fa-database"></i>
            <p name="be" class="numberOfStudents">
              {this.state.studentCount.be}
            </p>
            <p name="be" class="Students">
              Students
            </p>
            <h4 name="be"> Back End</h4>
          </button>
        </Link>

        <Link class="blockList" to="blocks/fe">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fe"
            name="fe"
          >
            <i class="fas fa-desktop" name="fe"></i>
            <p class="numberOfStudents" name="fe">
              {this.state.studentCount.fe}
            </p>
            <p class="Students" name="fe">
              Students
            </p>
            <h4 name="fe">Front End</h4>
          </button>
        </Link>
        <Link class="blockList" to="blocks/proj">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="proj"
            name="proj"
          >
            <i class="fas fa-users" name="proj"></i>
            <p class="numberOfStudents" name="proj">
              {this.state.studentCount.proj}
            </p>
            <p class="Students" name="proj">
              Students
            </p>
            <h4 name="proj">Projects</h4>
          </button>
        </Link>
        <Link class="blockList" to="blocks/grad">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="grad"
            name="grad"
          >
            <i class="fas fa-graduation-cap" name="grad"></i>
            <p class="numberOfStudents" name="grad">
              {this.state.studentCount.grad}
            </p>
            <p class="Students" name="grad">
              Students
            </p>
            <h4 name="grad"> Graduates</h4>
          </button>
        </Link>
        <Link to="blocks/grad">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="grad"
            id="grad"
          >
            Graduates
          </button>
        </Link>
      </div>
    );
  }
}

export default Blocks;
