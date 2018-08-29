import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class OptionsFrame extends Component {
  render() {
    const { options } = this.props;
    return (
      <React.Fragment>
        {options.map((el, id) => (
          <NavLink exact to={el.path} key={id}>
            <div className="module-options__option">
              <span>{el.name}</span>
            </div>
          </NavLink>
        ))}
      </React.Fragment>
    );
  }
}
