import React from "react";
import { Link, Router } from "@reach/router";
import Student from "./Student";

class FilteredStudent extends React.Component {
  state = {
    students: this.props.students,
    updated: this.props.updated
  };

  resetStudents = () => {
    this.props.resetState();
  };

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

  render() {
    if (this.state.students.length > 0) {
      const { students } = this.state;
      const { slug } = this.props;

      return (
        <div className="Students" id="studentsBlock">
          <Router>
            <Student path="/:id" resetStudents={this.resetStudents} />
          </Router>
          <ul>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <Link
                    to={`/students/blocks/${slug}/${_id}`}
                    id="studentCardName"
                  >
                    <div class="studentCardContainer" key={_id}>
                      <img src="/man.svg" alt="profilePic"></img>
                      {name}{" "}
                      <div id="studentCardCurrentBlock">
                        Current block: {currentBlock.toUpperCase()}
                      </div>
                      <div id="studentCardStartingCohort">
                        Starting cohort: {startingCohort}
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

export default FilteredStudent;
