import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as ProjectActions from "../../actions";
import { bindActionCreators } from "redux";
import { beautifyJSON } from "../../utils/beautifyJSON";
import ReactForm from "../custom/ReactForm";
import GetMethod from "./GetMethod";
import Spinner from "../custom/Spinner";
import InputForm_2 from "../inputForm_2";

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
            <ReactForm id="2" label="Add User" method={this.handleAddUser} />
            <InputForm_2
              id="3"
              label="Add User"
              method={this.handleFetchPosts}
            />
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
