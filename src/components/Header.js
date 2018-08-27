import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "Dev Panel" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <header className="">
        <Menu fixed="top" inverted>
          <Container>
            <NavLink exact to="/mainapp">
              <Menu.Item
                as="div"
                header
                name="Main App"
                active={activeItem === "Main App"}
                onClick={this.handleItemClick}
              >
                Main App
              </Menu.Item>
            </NavLink>
            <NavLink exact to="/devpanel">
              <Menu.Item
                as="div"
                name="Dev Panel"
                active={activeItem === "Dev Panel"}
                onClick={this.handleItemClick}
              >
                <span style={{ marginRight: "5px" }}>Dev Panel</span>
              </Menu.Item>
            </NavLink>
          </Container>
        </Menu>
      </header>
    );
  }
}
