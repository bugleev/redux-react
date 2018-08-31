import React, { Component } from "react";

export default class ResourcesTableHeader extends Component {
  render() {
    // const { shiftAmount } = this.props;
    const shiftAmount = [1, 2];
    return (
      <div className="resources-table__header">
        <span>Кластер</span>
        <span>Машины</span>
        <div className="resources-header__shifts-wrapper">
          {shiftAmount.map((el, id) => (
            <span>Место перегруза {id + 1}</span>
          ))}
        </div>
      </div>
    );
  }
}
