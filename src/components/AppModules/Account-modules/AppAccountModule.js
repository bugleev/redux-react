import React, { Component } from "react";
import ModuleOptionsFrame from "../App-shared/ModuleOptionsFrame";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import AccountPasswordModule from "./AccountPasswordModule";
import AccountSettingsModule from "./AccountSettingsModule";
import AccountIndexModule from "./AccountIndexModule";

export default class AppAccountModule extends Component {
  render() {
    const { match } = this.props;
    const moduleOptions = [
      {
        name: "Смена пароля",
        path: `${match.url}/password`
      },
      {
        name: "Настройки",
        path: `${match.url}/settings`
      }
    ];

    return (
      <div className="app-module__wrapper">
        <div className="app-module__options">
          <ModuleOptionsFrame options={moduleOptions} />
        </div>
        <Switch>
          <Route path={`${match.url}`} exact component={AccountIndexModule} />
          <Route
            path={`${match.url}/password`}
            exact
            component={AccountPasswordModule}
          />
          <Route
            path={`${match.url}/settings`}
            exact
            component={AccountSettingsModule}
          />
          <Redirect from={`${match.url}/:any`} to="/dashboard" />
        </Switch>
      </div>
    );
  }
}
