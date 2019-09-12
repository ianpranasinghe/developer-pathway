import React from "react";
import { Link, Router } from "@reach/router";
import * as urlRequest from "./urlRequest";
import Student from "./Student";

class Students extends React.Component {
  state = {
    students: []
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

  render() {
    if (this.state.students.length > 0) {
      const { students } = this.state;

      return (
        <div className="Students" id="studentsBlock">
          <Router>
            <Student path="students/:id" />
          </Router>
          <ul>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <div class="studentCard" key={_id}>
                    <Link to={`students/${_id}`} id="studentCardName">
                      {name}{" "}
                    </Link>
                    <div id="studentCardCurrentBlock">
                      {" "}
                      Current block: {currentBlock.toUpperCase()}
                    </div>
                    <div id="studentCardStartingCohort">
                      Starting cohort: {startingCohort}
                    </div>
                  </div>
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
