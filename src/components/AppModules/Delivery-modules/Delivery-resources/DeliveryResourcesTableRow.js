import React, { Component } from "react";
import { MdLocalShipping, MdModeEdit } from "react-icons/md";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const toggleState = key => state => ({ [key]: !state[key] });

export default class DeliveryResourcesTableRow extends Component {
  state = {
    editableMode: false
  };

  triggerEditableMode = () => {
    this.setState(toggleState("editableMode"));
  };
  render() {
    const options = [
      "ул. Маршала Прошлякова, дом 20, стр. 13",
      "ул. Маршала Прошлякова, дом 13, стр. 13",
      "ул. Маршала Прошлякова, дом 45, стр. 13"
    ];
    const defaultOption = options[0];
    const { editableMode } = this.state;
    const editableClass = editableMode ? "editable" : "";
    return (
      <div className={`resources-table__row ${editableClass}`}>
        <div className="resources-table__cluster-name">
          <span>K - 1</span>
        </div>
        <div className="resources-table__overall-van-amount">
          <span>
            <MdLocalShipping />
          </span>
          <span>16</span>
          <div className="van-amount__button">
            <i className="arrow__down" />
          </div>
        </div>
        <div className="resources-table__shifts-wrapper">
          <div className="resources-table__shift">
            {!editableMode ? (
              <div className="resources-table__hub-name">
                ул. Маршала Прошлякова, дом 20, стр. 13
              </div>
            ) : (
              <div className="resources-table__hub-dropdown">
                <Dropdown options={options} value={defaultOption} />
              </div>
            )}
            <div className="resources-table__shift-van-amount">
              <span>
                <MdLocalShipping />
              </span>
              <span>4</span>
              <div className="van-amount__button">
                <i className="arrow__down" />
              </div>
            </div>
          </div>
          <div className="resources-table__shift">
            {!editableMode ? (
              <div className="resources-table__hub-name">
                ул. Маршала Прошлякова, дом 20, стр. 13
              </div>
            ) : (
              <div className="resources-table__hub-dropdown">
                <Dropdown options={options} value={defaultOption} />
              </div>
            )}
            <div className="resources-table__shift-van-amount">
              <span>
                <MdLocalShipping />
              </span>
              <span>4</span>
              <div className="van-amount__button">
                <i className="arrow__down" />
              </div>
            </div>
          </div>
        </div>
        <div className="resources-table__menu-wrapper">
          {!editableMode && (
            <span onClick={this.triggerEditableMode}>
              <MdModeEdit />
            </span>
          )}
          {editableMode && (
            <div className="menu-wrapper__controls">
              <button onClick={this.triggerEditableMode}>Принять</button>
              <button onClick={this.triggerEditableMode}>Отмена</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
