import React, { Component } from "react";
import { Link } from "@reach/router";

class Blocks extends Component {
  render() {
    return (
      <div id="blocks">
        <Link class="blockList" to="blocks/fun">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fun"
            name="fun"
          >
            <i name="fun" class="fas fa-cubes"></i>
            <p class="numberOfStudents" name="fun">
              {this.props.studentCount && this.props.studentCount.fun}
            </p>
            <p class="Students" name="fun">
              Students
            </p>
            <h4 name="fun">Fundamentals</h4>
          </button>
        </Link>

        <Link class="blockList" to="blocks/be">
          <button
            class="blockCard"
            key="be"
            onClick={this.props.filterState}
            name="be"
          >
            <i name="be" class="fas fa-database"></i>
            <p name="be" class="numberOfStudents">
              {this.props.studentCount && this.props.studentCount.be}
            </p>
            <p name="be" class="Students">
              Students
            </p>
            <h4 name="be"> Back End</h4>
          </button>
        </Link>

        <Link class="blockList" to="blocks/fe">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fe"
            name="fe"
          >
            <i class="fas fa-desktop" name="fe"></i>
            <p class="numberOfStudents" name="fe">
              {this.props.studentCount && this.props.studentCount.fe}
            </p>
            <p class="Students" name="fe">
              Students
            </p>
            <h4 name="fe">Front End</h4>
          </button>
        </Link>
        <Link class="blockList" to="blocks/proj">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="proj"
            name="proj"
          >
            <i class="fas fa-users" name="proj"></i>
            <p class="numberOfStudents" name="proj">
              {this.props.studentCount && this.props.studentCount.proj}
            </p>
            <p class="Students" name="proj">
              Students
            </p>
            <h4 name="proj">Projects</h4>
          </button>
        </Link>
        <Link class="blockList" to="blocks/grad">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="grad"
            name="grad"
          >
            <i class="fas fa-graduation-cap" name="grad"></i>
            <p class="numberOfStudents" name="grad">
              {this.props.studentCount && this.props.studentCount.grad}
            </p>
            <p class="Students" name="grad">
              Students
            </p>
            <h4 name="grad"> Graduates</h4>
          </button>
        </Link>
      </div>
    );
  }
}

export default Blocks;
