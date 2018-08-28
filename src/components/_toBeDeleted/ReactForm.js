import React from "react";

import ReactInput from "../custom/ReactInput";
import { checkValidity } from "../../utils";

class ReactForm extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: ""
        },
        value: "",
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      },
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: ""
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: ""
        },
        value: "",
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };
  handleInputChange = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    this.props.method(formData);
  };
  handleDatePick(startDate, endDate) {
    const formattedStartDate = startDate.format();
    const formattedEndDate = endDate.format();
    return { formattedStartDate, formattedEndDate };
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.handleSubmit} className="input-form">
        {/* <DateRangePickerWrapper method={this.handleDatePick} /> */}
        {formElementsArray.map(formElement => (
          <ReactInput
            key={formElement.id}
            label={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            method={event => this.handleInputChange(event, formElement.id)}
          />
        ))}
        <button disabled={false}>submit</button>
      </form>
    );
    return (
      <div className="input-item">
        <span>
          {this.props.id}. {this.props.label}
        </span>
        {form} <hr />
      </div>
    );
  }
}

export default ReactForm;
