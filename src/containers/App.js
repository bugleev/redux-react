import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../style/semantic.min.css";
import "../style/main.css";
import "../style/react_dates_overrides.css";

import MainPage from "../components/MainPage";
import DevPanel from "../components/DevPanel/DevPanel";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
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
