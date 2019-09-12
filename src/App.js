import React from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";
import Pages from "./Components/Pages.js";

function App() {
  return (
    <div className="App" id="App">
      <Router id="mainDashboard">
        <Redirect noThrow from="/" to="/students" />
        <Pages path="/*" />
      </Router>
    </div>
  );
}

export default App;
