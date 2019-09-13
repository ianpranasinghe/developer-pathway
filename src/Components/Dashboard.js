import React from "react";
import DisplayStudents from "./DisplayStudents";
import { Router } from "@reach/router";

class Dashboard extends React.Component {
  state = {
    newStudent: {}
  };

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
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
        <Router>
          <DisplayStudents
            path="/blocks/:slug/*"
            newStudent={this.props.newStudent}
          />
          <DisplayStudents path="/*" newStudent={this.props.newStudent} />
        </Router>
      </>
    );
  }
}

export default Dashboard;
