import React, { Component } from "react";
import DeliveryResourcesTable from "./DeliveryResourcesTable";

export default class DeliveryResourcesModule extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="module-input-filters__wrapper">
          <div className="input-filters__inputs-wrapper">
            <select name="zone" id="zone-filter">
              <option value="1 сентября" className="calendar__item">
                adada
              </option>
            </select>
            <select name="segment" id="segment-filter" />
            <select name="source" id="source-filter" />
          </div>
        </div>
        <div className="module-main-area__wrapper">
          <DeliveryResourcesTable />
        </div>
      </React.Fragment>
    );
  }
}
