import React from "react";
import { Route } from "react-router-dom";

import SideFrame from "./AppModules/Appframe-modules/SideFrame";
import AddressFrame from "./AppModules/Appframe-modules/AddressFrame";
import AppAdminModule from "./AppModules/AppAdminModule";

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
        <SideFrame toggleOptions={this.toggleOptionsFrame} />
        <AddressFrame />

        <Route
          path="/dashboard"
          component={AppAdminModule}
          optionsVisible={this.state.showOptionsFrame}
        />
      </div>
    );
  }
}
