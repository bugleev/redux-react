import React from "react";

const UICalendarDayComponent = props => {
  const className = props.active ? "active" : "";
  const arrowVIsible = props.active ? <i className="arrow" /> : null;
  return (
    <div onClick={props.selected}>
      {props.status === "today" ? (
        <div className={`calendar__item ${className}`}>
          <span className="calendar__item--description">Текущий день</span>
          <span>{props.day}</span>
          {arrowVIsible}
        </div>
      ) : props.status === "yesterday" ? (
        <div className="calendar__item pastday">
          <span className="calendar__item--description">Предыдущий день</span>
          <span>{props.day}</span>
          {arrowVIsible}
        </div>
      ) : (
        <div className={`calendar__item ${className}`}>
          <span className="calendar__item--description" />
          <span>{props.day}</span>
          {arrowVIsible}
        </div>
      )}
    </div>
  );
};

export default UICalendarDayComponent;
