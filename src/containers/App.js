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

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={MainPage} />
          {/* <Route path="/devpanel" component={DevPanel} /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
