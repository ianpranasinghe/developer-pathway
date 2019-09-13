import React from "react";
import { Link, Router } from "@reach/router";
import Student from "./Student";
import * as urlRequest from "./urlRequest";

class DisplayStudents extends React.Component {
  state = {
    students: []
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
  ///check if slug has changed with cimpinent did update if the slug has changed - have a look at configuring axios to have a base URL
  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  render() {
    console.log(this.props);
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

export default DisplayStudents;