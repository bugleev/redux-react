import React from "react";
import Logo from "../../custom/Logo";

export default class SudeFrame extends React.Component {
  render() {
    return (
      <div className="app-sideframe">
        <div className="app-sideframe__content">
          <div className="sideframe__logo-wrapper">
            <a href="https://www.utkonos.ru/">
              <Logo />
            </a>
          </div>
          <div className="sideframe__links-wrapper" />
        </div>
        <div className="app-sideframe__user-info">
          <div
            className="app-sideframe__hide-options"
            onClick={this.props.toggleOptions}
          >
            <i className="arrow" />
          </div>
          <div className="sideframe__user-icon">User Icon</div>
          <div className="sideframe__user-options">
            <a href="">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}