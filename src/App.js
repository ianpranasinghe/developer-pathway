import React from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";
import Pages from "./Components/Pages.js";

function App() {
  return (
    <div className="App" id="App">
      <Router id="mainDashboard">
        <Redirect from="/" to="/students" />
        <Pages path="/students" />
      </Router>
    </div>
  );
}

export default App;
