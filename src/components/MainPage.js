import React from "react";
import { Route } from "react-router-dom";

import SideFrame from "./AppModules/Appframe-modules/SideFrame";
import AddressFrame from "./AppModules/Appframe-modules/AddressFrame";
import DashboardComponent from "./AppModules/DashboardComponent";

export default class MainPage extends React.Component {
  state = {
    showOptionsFrame: true
  };

  toggleOptionsFrame = () => {
    this.setState({
      showOptionsFrame: !this.state.showOptionsFrame
    });
  };

  render() {
    return (
      <div className="app-container">
        <SideFrame
          toggleOptions={this.toggleOptionsFrame}
          optionsVisible={this.state.showOptionsFrame}
        />
        <AddressFrame />
        <Route
          path="/dashboard"
          render={props => (
            <DashboardComponent
              optionsVisible={this.state.showOptionsFrame}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
