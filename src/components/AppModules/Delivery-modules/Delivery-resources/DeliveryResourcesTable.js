import React, { Component } from "react";
import ResourcesTableHeader from "./ResourcesTableHeader";
import DeliveryResourcesTableRow from "./DeliveryResourcesTableRow";

export default class DeliveryResourcesTable extends Component {
  render() {
    return (
      <React.Fragment>
        <ResourcesTableHeader />
        <DeliveryResourcesTableRow />
      </React.Fragment>
    );
  }
}
