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

  static getDerivedStateFromProps(props) {
    const path = props.location.pathname;
    let arr = path.split("/");
    arr.shift();

    const names = arr.map(el => {
      switch (el) {
        case "dashboard":
          return "Администрирование";
        case "intervals":
          return "Интервалы доставки";
        case "resources":
          return "Ресурсы доставки";
        case "prices":
          return "Управление ценами";
        default:
          return null;
      }
    });

    return {
      currentPath: {
        names: names,
        paths: arr
      }
    };
  }
  // componentDidMount() {
  //   console.log(this.props.location.pathname, "mount");
  // }
  // componentDidUpdate() {
  //   console.log(this.props.location.pathname, "update");
  // }

  render() {
    const { currentPath, links } = this.state;
    return (
      <div className="app-addressframe">
        <div className="addressframe__module-name">
          <span>
            {currentPath.names.length === 1
              ? "Администрирование"
              : currentPath.names[1]}
          </span>
        </div>
        <div className="addressframe__address-bar" />
      </div>
    );
  }
}
export default withRouter(props => <AddressFrame {...props} />);
