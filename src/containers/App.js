import React, { Component } from "react";
import TestMessage from "../components/TestMessage";
import "../style/main.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>TMS UI</h1>
        <TestMessage />
      </div>
    );
  }
}

export default App;
