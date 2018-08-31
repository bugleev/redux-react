import React, { Component } from "react";
import Dropdown from "react-dropdown";
import DateFilterComponent from "../../App-shared/DateFilterComponent";

export default class DeliveryResourceHeader extends Component {
  render() {
    const options = ["Все", "К-1", "К-2"];
    const defaultOption = options[0];

    return (
      <div className="module-input-filters__wrapper">
        <div className="input-filters__inputs-wrapper">
          <DateFilterComponent />
          <div className="input-filters__cluster-dropdown">
            <label>Кластер</label>
            <Dropdown options={options} value={defaultOption} />
          </div>
        </div>
      </div>
    );
  }
}
