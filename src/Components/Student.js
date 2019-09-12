import React, { Component } from "react";
import * as urlRequest from "./urlRequest";

class Student extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    this.getStudent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getStudent();
    }
  }

  getStudent = () => {
    const { id } = this.props;
    return urlRequest
      .getData(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
      .then(({ student }) => {
        this.setState(currentState => {
          const newState = { ...currentState, student };
          return newState;
        });
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
                  <li key={numOfAttempts}>Number of attempts: {numOfAttempts}</li>
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
