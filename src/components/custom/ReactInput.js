import React from "react";
import { Input } from "semantic-ui-react";

const input = props => {
  let inputElement = null;
  const inputClasses = [];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          size="small"
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.method}
          error={props.touched && props.invalid}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.method}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.method}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <Input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.method}
        />
      );
  }

  return (
    <div className="input-wrapper">
      <label className="">{props.label}</label>
      <span className="input__helper-text">*Some helper text</span>
      {inputElement}
    </div>
  );
};

export default input;
