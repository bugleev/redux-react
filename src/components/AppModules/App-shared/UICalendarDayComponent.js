import React from "react";

export default props => {
  return (
    <React.Fragment>
      {props.status === "today" ? (
        <div className="calendar__item active">
          <span className="calendar__item--description">Текущий день</span>
          <i className="arrow" />
          <span>{props.day}</span>
        </div>
      ) : props.status === "yesterday" ? (
        <div className="calendar__item pastday">
          <span className="calendar__item--description">Предыдущий день</span>
          <span>{props.day}</span>
        </div>
      ) : (
        <div className="calendar__item">
          <span>{props.day}</span>
        </div>
      )}
    </React.Fragment>
  );
};
