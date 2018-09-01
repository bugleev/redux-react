import React, { Component } from "react";
import DeliveryResourcesTableHeader from "./DeliveryResourcesTableHeader";
import DeliveryResourcesTableRow from "./DeliveryResourcesTableRow";

export default class DeliveryResourcesTable extends Component {
  render() {
    return (
      <React.Fragment>
        <DeliveryResourcesTableHeader />
        <DeliveryResourcesTableRow />
      </React.Fragment>
    );
  }
}
