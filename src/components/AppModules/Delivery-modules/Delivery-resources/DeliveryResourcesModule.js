import React, { Component } from "react";
import DeliveryResourcesTable from "./DeliveryResourcesTable";
import DeliveryResourceHeader from "./DeliveryResourcesHeader";

export default class DeliveryResourcesModule extends Component {
  render() {
    return (
      <React.Fragment>
        <DeliveryResourceHeader />
        <div className="module-main-area__wrapper">
          <DeliveryResourcesTable />
        </div>
      </React.Fragment>
    );
  }
}
