import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import ModuleOptionsFrame from "./App-shared/ModuleOptionsFrame";
import DeliveryIntervalsModule from "./Delivery-modules/Delivery-intervals/DeliveryIntervalsModule";
import DeliveryResourcesModule from "./Delivery-modules/Delivery-resources/DeliveryResourcesModule";
import DeliveryPricesModule from "./Delivery-modules/Delivery-prices/DeliveryPricesModule";

export default class AppAdminModule extends Component {
  render() {
    const { match } = this.props;
    console.log(this.props);
    const visibleClass = this.props.optionsVisible ? "" : "hidden";
    const AdminOptions = [
      {
        name: "Интервалы доставки",
        path: `${match.url}/intervals`
      },
      {
        name: "Ресурсы доставки",
        path: `${match.url}/resources`
      },

      {
        name: "Управление ценами",
        path: `${match.url}/prices`
      }
    ];

    return (
      <div className={`app-module__wrapper ${visibleClass}`}>
        {this.props.optionsVisible && (
          <div className="app-module__options">
            <ModuleOptionsFrame options={AdminOptions} />
          </div>
        )}

        <div className="app-module__body">
          <Switch>
            <Route
              exact
              path={`${match.url}/intervals`}
              component={DeliveryIntervalsModule}
            />
            <Route
              exact
              path={`${match.url}/resources`}
              component={DeliveryResourcesModule}
            />
            <Route
              exact
              path={`${match.url}/prices`}
              component={DeliveryPricesModule}
            />
            <Redirect from={`${match.url}/:any`} to="/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}
