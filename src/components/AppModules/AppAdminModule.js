import React, { Component } from "react";
import ModuleOptionsFrame from "./ModuleOptionsFrame";

export default class AppAdminModule extends Component {
  render() {
    const { match } = this.props;
    const moduleOptions = [
      {
        name: "Настройки доставки",
        path: `${match.url}/delivery`
      },
      {
        name: "Управление аккаунтом",
        path: `${match.url}/account`
      },
      {
        name: "Еще настройки",
        path: "/"
      },
      {
        name: "Еще настройки",
        path: "/"
      }
    ];
    return (
      <div className="app-module__wrapper">
        <div className="app-module__options">
          <ModuleOptionsFrame options={moduleOptions} />
        </div>
        <div className="app-module__body">Администрирование</div>
      </div>
    );
  }
}