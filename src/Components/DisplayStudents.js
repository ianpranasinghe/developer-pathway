import React from "react";
import { Link, Router } from "@reach/router";
import Student from "./Student";
import * as urlRequest from "./urlRequest";
import Blocks from "./Blocks";

class DisplayStudents extends React.Component {
  state = {
    students: [],
    newStudent: {}
  };

  fetchData = () => {
    const { slug } = this.props;
    const endpoint = slug ? `blocks/${slug}/students` : "students";
    urlRequest.getData(endpoint).then(data => {
      this.setState(currentState => {
        const newState = {
          ...currentState,
          students: data.students
        };

        return newState;
      });
    });
  };

  studentUpdate = newStudent => {
    this.setState({ newStudent });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
    if (
      prevProps.uri !== this.props.uri ||
      prevProps.newStudent !== this.props.newStudent ||
      prevState.newStudent !== this.state.newStudent
    ) {
      this.fetchData();
    }
  }

  render() {
    if (this.state.students.length > 0) {
      const { students, newStudent } = this.state;
      const { slug } = this.props;
      return (
        <div className="Students" id="studentsBlock">
          <Blocks
            newStudent={newStudent}
            addedStudent={this.props.newStudent}
          />
          <h3>Students</h3>
          <Router>
            <Student path=":id" studentUpdate={this.studentUpdate} />
          </Router>
          <ul>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <Link
                    to={
                      slug
                        ? `/students/blocks/${slug}/${_id}`
                        : `/students/${_id}`
                    }
                    id="studentCardName"
                  >
                    <div className="studentCardContainer" key={_id}>
                      <div className="studentCardInner">
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

export default DisplayStudents;
