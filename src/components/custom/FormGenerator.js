import React from "react";
import PropTypes from "prop-types";
import { Button, Label } from "semantic-ui-react";

import ReactInput from "./ReactInput";
import { checkValidity } from "../../utils";

export default class ReactForm extends React.Component {
  state = {
    orderForm: this.props.formSource,
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
        <Button secondary size="tiny" disabled={false}>
          Submit
        </Button>
      </form>
    );
    return (
      <div className="input-item">
        <Label>
          {this.props.id}. {this.props.label}
        </Label>
        {form}
      </div>
    );
  }
}
