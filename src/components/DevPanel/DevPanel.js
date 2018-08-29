import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Segment } from "semantic-ui-react";

import { retrieveUsers, addUser } from "../../actions";
import { formModelCreator } from "../../utils";
import FormGenerated from "../custom/FormGenerator";
import MethodGenerated from "../custom/MethodGenerator";
import RequestStatus from "./RequestStatus";
import ErrorStatus from "./ErrorStatus";
import OutputWrapper from "./OutputWrapper";

const userModel = {
  firstName: "string",
  lastName: "string",
  name: "string",
  method: { method_name: "API_POST_handleAddUser", method_label: "Add user" }
};

class DevPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: this.createFormsFromModels(),
      methods: this.createComponentsFromMethods()
    };
  }

  componentDidMount() {}

  createComponentsFromMethods = () => {
    const methods = [];
    for (let key in this) {
      if (key.slice(0, 8) === "API_GET_") {
        methods.push({ method: key, label: this[key]("GET_LABEL") });
      }
    }
    return methods;
  };
  createFormsFromModels = () => {
    const formModelsArr = [];
    formModelsArr.push(
      Object.assign(formModelCreator(userModel), userModel.method)
    );
    return formModelsArr;
  };

  API_GET_handleFetchUsers = arg => {
    if (arg === "GET_LABEL") return "Get user";
    this.props.retrieveUsers();
  };
  API_POST_handleAddUser = data => {
    this.props.addUser(data);
  };

  render() {
    return (
      <div className="dev-wrapper">
        <div className="controls-wrapper">
          <div>
            <h4>API Methods</h4>
            {this.state.methods.map((item, id) => (
              <Segment key={item.method}>
                <MethodGenerated
                  id={id + 1}
                  label={item.label}
                  method={this[item.method]}
                  buttonText="Make request"
                />
              </Segment>
            ))}
            {this.state.forms.map((item, id) => (
              <Segment key={item}>
                <FormGenerated
                  formSource={item}
                  id={this.state.methods.length + 1 + id}
                  label={item.method_label}
                  method={this[item.method_name]}
                />
              </Segment>
            ))}
          </div>
        </div>
        <div className="state-wrapper">
          <RequestStatus />
          <ErrorStatus />
        </div>
        <div className="output-wrapper">
          <OutputWrapper />
        </div>
      </div>
    );
  }
}

DevPanel.propTypes = {
  retrieveUsers: PropTypes.func,
  addUser: PropTypes.func
};

const MapDispatchToProps = dispatch =>
  bindActionCreators({ ...{ retrieveUsers, addUser } }, dispatch);

export default connect(
  null,
  MapDispatchToProps
)(DevPanel);
