import React from "react";
import { Link, Router } from "@reach/router";
import Student from "./Student";

class Students extends React.Component {
  state = {
    students: this.props.students
  };

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {

    if (this.state.students.length > 0) {
      console.log("in unfiltered students file")
      const { students } = this.state;      
      return (
        <div className="Students" id="studentsBlock">
          <Router>        
            <Student path=":id" />
          </Router>
          <ul>
            {students.map(student => {
              const { name, _id, startingCohort, currentBlock } = student;
              return (
                <>
                  <div class="studentCard" key={_id}>
                    <Link to={`/students/${_id}`} id="studentCardName">
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
