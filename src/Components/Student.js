import React, { Component } from "react";
import * as urlRequest from "./urlRequest";
import { Link } from "@reach/router";

class Student extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getStudent();
  }

  getStudent = () => {
    const { id } = this.props;
    return urlRequest.getData(`students/${id}`).then(({ student }) => {
      this.setState(currentState => {
        const newState = { ...currentState, student };
        return newState;
      });
    });
  };

  patchStudent = () => {
    const { id, studentUpdate } = this.props;
    return urlRequest
      .patchData(`students/${id}?progress=true`)
      .then(({ student }) => {
        studentUpdate(student);
      });
  };

  deleteStudent = () => {
    const { id, studentUpdate } = this.props;
    return urlRequest.deleteData(`students/${id}`).then(({ student }) => {
      studentUpdate(id);
    });
  };

  render() {
    const { student } = this.state;
    if (Object.keys(student).length > 0) {
      const newArr = student.blockHistory.reduce((newArray, block) => {
        if (
          newArray.filter(newBlock => newBlock.name === block.name).length > 0
        ) {
          newArray.find(newBlock => newBlock.name === block.name)
            .numOfAttempts++;
        } else {
          block["numOfAttempts"] = 1;
          newArray.push(block);
        }
        return newArray;
      }, []);
      return (
        <div id="student">
          <Link to="../">Close</Link>
          <Link to="../">
            {" "}
            <button onClick={this.patchStudent}>Graduate From Block</button>
            <button onClick={this.deleteStudent}>Delete Student</button>
          </Link>
          <h1 id="name">{student.name}</h1>
          <p>Student ID: {student._id}</p>
          <p>Starting cohort: {student.startingCohort}</p>
          {newArr.map(block => {
            const { numOfAttempts, _id, name } = block;
            return (
              <div className="blocks">
                <h3>{name}</h3>
                <ul className="blocksList">
                  <li key={_id}>Block ID: {_id}</li>
                  <li key={numOfAttempts}>
                    Number of attempts: {numOfAttempts}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div id="student">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default Student;
