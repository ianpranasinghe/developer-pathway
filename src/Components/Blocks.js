import React, { Component } from "react";
import { Link } from "@reach/router";

class Blocks extends Component {
  render() {
    return (
      <div id="blocks">
        <Link to="fun">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fun"
            id="fun"
          >
            Fundamentals
          </button>
        </Link>

        <Link to="be">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="be"
            id="be"
          >
            Back End
          </button>
        </Link>

        <Link to="fe">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="fe"
            id="fe"
          >
            Front End
          </button>
        </Link>
        <Link to="proj">
          <button
            onClick={this.props.filterState}
            class="blockCard"
            key="proj"
            id="proj"
          >
            Projects
          </button>
        </Link>
      </div>
    );
  }
}

export default Blocks;
