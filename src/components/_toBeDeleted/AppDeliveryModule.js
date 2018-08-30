import React, { Component } from "react";
import ModuleOptionsFrame from "../App-shared/ModuleOptionsFrame";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import DeliveryIntervalsModule from "./Delivery-intervals/DeliveryIntervalsModule";
import DeliveryPricesModule from "./Delivery-prices/DeliveryPricesModule";
import DeliveryResourcesModule from "./Delivery-resources/DeliveryResourcesModule";
import DeliveryIndexModule from "./DeliveryIndexModule";

export default class AppDeliveryModule extends Component {
  render() {
    const { match } = this.props;
    const moduleOptions = [
      {
        name: "Интервалы",
        path: `${match.url}/intervals`
      },
      {
        name: "Ресурсы",
        path: `${match.url}/resources`
      },
      {
        name: "Цены",
        path: `${match.url}/prices`
      }
    ];

    return (
      <Switch>
        <Route path={`${match.url}`} exact component={DeliveryIndexModule} />
        <Route
          path={`${match.url}/intervals`}
          exact
          component={DeliveryIntervalsModule}
        />
        <Route
          path={`${match.url}/resources`}
          exact
          component={DeliveryResourcesModule}
        />
        <Route
          path={`${match.url}/prices`}
          exact
          component={DeliveryPricesModule}
        />
        <Redirect from={`${match.url}/:any`} to="/dashboard" />
      </Switch>
    );
  }
}
