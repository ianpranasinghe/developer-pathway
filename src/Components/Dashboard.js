import React from "react";

import DisplayStudents from "./DisplayStudents";

import Blocks from "./Blocks";
import { Link, Router } from "@reach/router";

class Dashboard extends React.Component {
  state = {
    newStudent: this.props.newStudent
  };

  componentDidUpdate(prevProps) {
    if (prevProps.newStudent !== this.state.newStudent) {
      this.setState(currentState => {
        const { newStudent } = prevProps;
        const newState = { ...currentState, newStudent };
        return newState;
      });
    }
  }

  render() {
    return (
      <>
        <h2 id="dashboardHeader">Developer Pathway</h2>
        <Blocks newStudent={this.state.newStudent} />
        <div id="toggle">
          <Link to="/students" id="toggle">
            <button class="allStudents" id="">
              All
            </button>
          </Link>
        </div>

        <Router>
          <DisplayStudents
            path="/blocks/:slug/*"
            newStudent={this.state.newStudent}
          />
          <DisplayStudents path="/*" newStudent={this.state.newStudent} />
        </Router>
      </>
    );
  }
}

export default Dashboard;
