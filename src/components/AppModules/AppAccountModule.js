import React, { Component } from "react";
import ModuleOptionsFrame from "./ModuleOptionsFrame";
import { Route } from "react-router-dom";
import AccountPasswordModule from "./AccountPasswordModule";
import AccountSettingsModule from "./AccountSettingsModule";

export default class AppAccountModule extends Component {
  render() {
    const moduleOptions = [
      {
        name: "Смена пароля",
        path: "/account/password"
      },
      {
        name: "Настройки",
        path: "/account/settings"
      }
    ];
    const { match } = this.props;
    console.log(match);

    return (
      <div className="app-module__wrapper">
        <div className="app-module__options">
          <ModuleOptionsFrame options={moduleOptions} />
        </div>

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
      </div>
    );
  }
}
