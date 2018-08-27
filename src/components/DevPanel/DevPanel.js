import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Segment } from "semantic-ui-react";

import * as ProjectActions from "../../actions";
import { beautifyJSON, formModelCreator } from "../../utils";
import FormGenerated from "../custom/FormGenerator";
import GetMethod from "./GetMethod";
import Spinner from "../custom/Spinner";

class DevPanel extends React.Component {
  componentDidMount() {
    console.log(process.env);
  }
  componentDidUpdate() {
    if (this.props.dataOutput) {
      let { dataOutput } = this.props;
      dataOutput = beautifyJSON(JSON.stringify(dataOutput, null, 4));
      document.querySelector("pre").innerHTML = dataOutput;
    }
  }
  handleFetchUsers = () => {
    const { retrieveUsers } = this.props;
    retrieveUsers();
  };
  handleFetchPosts = () => {
    const { retrievePosts } = this.props;
    retrievePosts();
  };
  handleAddUser = data => {
    const { addUser } = this.props;
    addUser(data);
  };

  render() {
    let { isFetching, errorDetails } = this.props;
    const userModel = {
      id: 0,
      firstName: "string",
      lastName: "string",
      name: "string"
    };

    return (
      <div className="dev-wrapper">
        <div className="controls-wrapper">
          <div>
            <h4>API Methods</h4>
            <Segment>
              <GetMethod
                id="1"
                label="Get Users"
                method={this.handleFetchUsers}
                buttonText="Make request"
              />
            </Segment>
            <Segment>
              <FormGenerated
                formSource={formModelCreator(userModel)}
                id="2"
                label="Add User"
                method={this.handleAddUser}
              />
            </Segment>
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
          <div className="error-wrapper">
            <h4>Error Status</h4>
            <div className="error-body">
              <p className="error-status__text">
                {errorDetails ? errorDetails : null}
              </p>
            </div>
          </div>
        </div>
        <div className="output-wrapper">
          <h4>Response Output</h4>
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
  const { users, fetchStatus } = state;
  return {
    isFetching: fetchStatus.isFetching,
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
