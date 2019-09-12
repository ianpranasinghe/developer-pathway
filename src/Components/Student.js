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
          return newArray.find(newBlock => newBlock.name === block.name)[
            "count"
          ]++;
        } else {
          return (block["count"] = 1);
        }
      }, []);
      console.log(newArr);
      return (
        <div id="student">
          <h1 id="name">{student.name}</h1>
          <p>{student.id}</p>
          <p>{student.startingCohort}</p>
          {}
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
