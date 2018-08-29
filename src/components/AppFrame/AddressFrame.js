import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class AddressFrame extends Component {
  state = {
    currentPath: {
      names: [],
      paths: []
    }
  };

  static getDerivedStateFromProps(props, state) {
    const path = props.location.pathname;
    const arr = path.split("/");
    arr.shift();
    console.log(arr);
    const addresses = arr.map(el => {
      switch (el) {
        case "delivery":
          return "Настройки доставки";
        case "account":
          return "Управление аккаунтом";
        case "password":
          return "Управление паролем";
        case "settings":
          return "Управление настройками";
        default:
          return null;
      }
    });
    console.log(addresses);
    let links = [];
    if (arr.length > 1) {
    }
    return {
      currentPath: {
        names: addresses,
        paths: arr
      }
    };
  }
  componentDidMount() {
    console.log(this.props.location.pathname, "mount");
  }
  componentDidUpdate() {
    console.log(this.props.location.pathname, "update");
  }

  render() {
    console.log(this.state.currentPath);
    const { currentPath } = this.state;
    return (
      <div className="app-addressframe">
        <div className="addressframe__module-name">
          <span>
            {currentPath.names[0] === null
              ? "Администрирование"
              : currentPath.names[0]}
          </span>
        </div>
        <div className="addressframe__address-bar">
          <NavLink to="/">
            <span className="address-bar__link">Администрирование</span>
          </NavLink>
          {currentPath.names.map(
            (el, id) =>
              el && (
                <React.Fragment key={el}>
                  <span>></span>
                  <NavLink to={`/${currentPath.paths[id]}`}>
                    <span className="address-bar__link">{el}</span>
                  </NavLink>
                </React.Fragment>
              )
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(props => <AddressFrame {...props} />);
