import React, { Component } from "react";

export default class UICalendarDropDown extends Component {
  render() {
    return (
      <div className="module-date-filter__wrapper">
        <div className="date-filter__current-date">
          <span>29 Августа 2018</span>
        </div>
        <div className="date-filter__calendar">
          <div className="calendar__item pastday">
            <span className="calendar__item--description">Предыдущий день</span>
            <span>1 сентября</span>
          </div>
          <div className="calendar__item active">
            <span className="calendar__item--description">Текущий день</span>
            <i className="arrow" />
            <span>1 сентября</span>
          </div>
          <div className="calendar__item">
            <span>1 сентября</span>
          </div>
          <div className="calendar__item">
            <span>1 сентября</span>
          </div>
          <div className="calendar__item">
            <span>1 сентября</span>
          </div>
          <div className="calendar__item">
            <span>1 сентября</span>
          </div>
          <div className="calendar__item">
            <span>1 сентября</span>
          </div>
        </div>
      </div>
    );
  }
}
