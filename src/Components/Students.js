import React from "react";
import { Link } from "@reach/router";
import * as urlRequest from "./urlRequest";

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
        <div className="Students">
          <ol>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <li key={_id}>
                    <Link to={`/${_id}`}>{name} </Link>
                  </li>
                  <ul>
                    <li>
                      <u>Current block:</u> {currentBlock.toUpperCase()}
                    </li>
                    <li>
                      <u>Starting cohort:</u> {startingCohort}
                    </li>
                  </ul>
                </>
              );
            })}
          </ol>
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
