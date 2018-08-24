import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>TMS UI</h1>
        <nav className="links-wrapper">
          <NavLink exact to="/mainapp" activeClassName="active">
            <button>Main App</button>
          </NavLink>
          <NavLink exact to="/devpanel" activeClassName="active">
            <button>Dev Panel</button>
          </NavLink>
        </nav>
      </header>
    );
  }
}
