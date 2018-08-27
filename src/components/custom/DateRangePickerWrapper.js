import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import localization from "moment/locale/ru";

moment.locale("ru", localization);
export class DateRangePickerWrapper extends Component {
  state = {
    startDate: moment(),
    endDate: moment().add(1, "day"),
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    const { method } = this.props;
    this.setState(
      {
        startDate,
        endDate
      },
      () => {
        method(this.state.startDate, this.state.endDate);
      }
    );
  };
  render() {
    return (
      <div className="datepicker-wrapper">
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          appendToBody
          small
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          showClearDates
          startDatePlaceholderText="c "
          endDatePlaceholderText="по"
          phrases={{ closeDatePicker: "Закрыть", clearDates: "Очистить" }}
        />
      </div>
    );
  }
}
