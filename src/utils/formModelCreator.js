export function formModelCreator(object) {
  const formModel = {};
  for (let inputIdentifier in object) {
    if (typeof object[inputIdentifier] === "string") {
      formModel[inputIdentifier] = {
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
      };
    }
    if (typeof object[inputIdentifier] === "number") {
      formModel[inputIdentifier] = {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: ""
        },
        value: "",
        validation: {
          required: true,
          minLength: 1
        },
        valid: false,
        touched: false
      };
    }
    if (typeof object[inputIdentifier] === "boolean") {
      formModel[inputIdentifier] = {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "false", displayValue: "false" },
            { value: "true", displayValue: "true" }
          ]
        },
        value: "",
        validation: {},
        valid: true
      };
    }
  }

  return formModel;
}
