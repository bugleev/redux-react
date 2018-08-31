import React, { Component } from "react";
import { toggleStateKey } from "../../../utils/toggleStateKey";
import UICalendarDayComponent from "./UICalendarDayComponent";
import format from "date-fns/format";
import addDays from "date-fns/add_days";
import ru from "date-fns/locale/ru";
export default class DateFilterComponent extends Component {
  state = {
    dateFilterVisible: false,
    currentDate: null,
    availableDates: []
  };

  componentDidMount() {
    const yesterday = format(
      new Date(new Date()).setDate(new Date().getDate() - 1),
      "DD MMMM YYYY",
      {
        locale: ru
      }
    );
    const today = format(new Date(), "DD MMMM YYYY", {
      locale: ru
    });
    const newDates = [yesterday, today];
    for (let i = 1; i < 8; i++) {
      newDates.push(
        format(addDays(new Date(), i), "DD MMMM YYYY", {
          locale: ru
        })
      );
    }
    console.log(newDates);

    console.log(format);
    this.setState({
      currentDate: today,
      availableDates: newDates
    });
  }
  toggleDateFilter = () => {
    this.setState(toggleStateKey("dateFilterVisible"));
  };
  render() {
    const { dateFilterVisible, currentDate, availableDates } = this.state;
    return (
      <div className="date-menu__wrapper">
        <label>Текущая дата</label>
        <div className="date-menu__control" onClick={this.toggleDateFilter}>
          <div className="date-menu__placeholder">{currentDate}</div>
          <div className="date-menu__arrow-wrapper">
            <span className="date-menu__arrow" />
          </div>
        </div>
        {dateFilterVisible && (
          <div className="popup-date-filter__wrapper">
            <div className="date-filter__calendar">
              {availableDates.map(el => (
                <UICalendarDayComponent day={el} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
