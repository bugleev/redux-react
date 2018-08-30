import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class AddressFrame extends Component {
  state = {
    currentPath: {
      names: [],
      paths: []
    },
    links: []
  };

  static getDerivedStateFromProps(props) {
    const path = props.location.pathname;
    let arr = path.split("/");
    arr.shift();

    const names = arr.map(el => {
      switch (el) {
        case "dashboard":
          return "Администрирование";
        case "delivery":
          return "Настройки доставки";
        case "account":
          return "Управление аккаунтом";
        case "password":
          return "Управление паролем";
        case "settings":
          return "Управление настройками";
        case "intervals":
          return "Интервалы";
        case "resources":
          return "Ресурсы";
        case "prices":
          return "Цены";
        default:
          return null;
      }
    });

    let links = [];
    if (arr.length === 1) links.push(arr[0]);
    arr = arr.reduce((acc, curr, ind) => {
      if (ind === 1) links.push(acc);
      links.push(acc + "/" + curr);
      return acc + "/" + curr;
    });

    return {
      currentPath: {
        names: names,
        paths: arr
      },
      links: links
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
        <div className="addressframe__address-bar">
          {currentPath.names.map(
            (el, id) =>
              el && (
                <React.Fragment key={el}>
                  {id > 0 && <span className="address-bar__dash">></span>}
                  <NavLink to={`/${links[id]}`}>
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
