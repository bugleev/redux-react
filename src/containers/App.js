import React, { Component } from "react";
import MainPage from "../components/MainPage";
import DevPanel from "../components/DevPanel/DevPanel";
import "../style/main.css";
import Header from "../components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={() => <Redirect to="/devpanel" />} />
          <Route exact path="/mainapp" component={MainPage} />
          <Route exact path="/devpanel" component={DevPanel} />
        </div>
      </Router>
    );
  }
}

export default App;
