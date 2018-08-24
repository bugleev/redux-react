import React from "react";

export default props => {
  return (
    <div className="control-item">
      <span>
        {props.id}. {props.label}
      </span>
      <button onClick={props.method}>Method BTN</button>
      <hr />
    </div>
  );
};
