import React from "react";
import { Link, Router } from "@reach/router";

import Student from "./Student";

class Students extends React.Component {
  state = {
    students: this.props.students
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.students !== this.props.students ||
      prevProps.updated !== this.props.updated
    ) {
      this.setState(currentState => {
        const newState = {
          ...currentState,
          filter: prevProps.filter,
          students: this.props.students
        };
        return newState;
      });
    }
  }

  resetStudents = () => {
    this.props.resetState();
  };

  render() {
    if (this.state.students.length > 0) {
      const { students } = this.state;
      return (
        <div className="Students" id="studentsBlock">
          <h3>Students</h3>
          <p>114 Results</p>
          <Router>
            <Student path=":id" resetStudents={this.resetStudents} />
          </Router>
          <ul>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <Link to={`/students/${_id}`} id="studentCardName">
                    <div class="studentCardContainer" key={_id}>
                      <div class="studentCardInner">
                        <img src="/man.svg" alt="profilePic"></img>
                        {name}{" "}
                        <div id="studentCardCurrentBlock">
                          {" "}
                          Current block: {currentBlock.toUpperCase()}
                        </div>
                        <div id="studentCardStartingCohort">
                          Starting cohort: {startingCohort}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="Students">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default Students;
