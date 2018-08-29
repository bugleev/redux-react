import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

import SideFrame from "./AppFrame/SideFrame";
import AddressFrame from "./AppFrame/AddressFrame";
import AppAdminModule from "./AppModules/AppAdminModule";
import AppDeliveryModule from "./AppModules/AppDeliveryModule";
import AppAccountModule from "./AppModules/AppAccountModule";

export default class MainPage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="app-container">
        <SideFrame />
        <AddressFrame />

        <Route exact path="/" component={AppAdminModule} />
        <Route path="/delivery" component={AppDeliveryModule} />
        <Route path="/account" component={AppAccountModule} />
      </div>
    );
  }
}
