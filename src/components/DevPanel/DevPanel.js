import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as ProjectActions from "../../actions";
import { bindActionCreators } from "redux";
import { beautifyJSON } from "../../utils/beautifyJSON";
import InputForm from "./inputForm";
import GetMethod from "./GetMethod";
import Spinner from "../Spinner";

class DevPanel extends React.Component {
  state = {};

  componentDidMount() {
    window.scroll(0, 0);
    console.log(process.env);
  }
  componentDidUpdate() {
    let { dataOutput } = this.props;
    dataOutput = beautifyJSON(JSON.stringify(dataOutput, null, 4));
    document.querySelector("pre").innerHTML = dataOutput;
  }
  handleFetchUsers = () => {
    const { retrieveUsers } = this.props;
    retrieveUsers();
  };
  handleAddUser = data => {
    const { addUser } = this.props;
    addUser(data);
  };

  render() {
    let { isFetching, errorDetails } = this.props;

    return (
      <div className="dev-wrapper">
        <div className="controls-wrapper">
          <div>
            <h4>API Methods</h4>
            <GetMethod
              id="1"
              label="Get Users"
              method={this.handleFetchUsers}
            />
            <InputForm id="2" label="Add User" method={this.handleAddUser} />
          </div>
        </div>
        <div className="state-wrapper">
          <div className="request-wrapper">
            <h4>Request Status</h4>
            <div className="request-body">
              <p>{isFetching ? "loading" : null}</p>
              {isFetching ? <Spinner /> : null}
            </div>
          </div>
          <h4>Error Status</h4>
          <div className="error-wrapper" />
          <div className="error-body">
            <p>{errorDetails ? errorDetails : null}</p>
          </div>
        </div>
        <div className="output-wrapper">
          <h4>Request Output</h4>
          <div className="output-body">
            <pre />
          </div>
        </div>
      </div>
    );
  }
}

// Set state and action as proptype
DevPanel.propTypes = {
  message: PropTypes.string
};

// Map Redux state to props
function mapStateToProps(state) {
  const { users } = state;
  return {
    isFetching: users.isFetching,
    errorDetails: users.errorDetails,
    dataOutput: users.dataOutput
  };
}

// Map action to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, ProjectActions), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevPanel);
