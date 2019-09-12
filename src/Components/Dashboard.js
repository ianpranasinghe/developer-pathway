import React from "react";
import Students from "./Students";

class Dashboard extends React.Component {
  state = {
    students: []
  };

  render() {
    return (
      <>
        <h1>Dashboard</h1>

        <Students />
      </>
    );
  }
}

export default Dashboard;
