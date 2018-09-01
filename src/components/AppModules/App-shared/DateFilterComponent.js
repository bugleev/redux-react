import React, { Component } from "react";
import { toggleStateKey } from "../../../utils/toggleStateKey";
import UICalendarDayComponent from "./UICalendarDayComponent";
import format from "date-fns/format";
import addDays from "date-fns/add_days";
import ru from "date-fns/locale/ru";
import parse from "date-fns/parse";
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
    const newDates = [
      { date: yesterday, status: "yesterday", active: false },
      { date: today, status: "today", active: true }
    ];
    for (let i = 1; i < 8; i++) {
      newDates.push({
        date: format(addDays(new Date(), i), "DD MMMM YYYY", {
          locale: ru
        }),
        status: "",
        active: false
      });
    }
    this.setState({
      currentDate: today,
      availableDates: newDates
    });
  }
  toggleDateFilter = () => {
    this.setState(toggleStateKey("dateFilterVisible"));
  };
  handleDateSelection = e => {
    const { availableDates, currentDate } = this.state;
    const dateText = e.currentTarget.children[0].children[1].textContent;
    if (dateText === availableDates[0].date) return;
    if (dateText === currentDate) {
      this.setState({
        dateFilterVisible: false
      });
      return;
    }
    const newDates = [...availableDates];
    newDates.forEach(el => {
      el.active = el.date === dateText ? true : false;
    });
    this.setState({
      dateFilterVisible: false,
      currentDate: dateText,
      availableDates: newDates
    });
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
                <UICalendarDayComponent
                  key={el.date}
                  day={el.date}
                  status={el.status}
                  active={el.active}
                  selected={e => this.handleDateSelection(e)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
