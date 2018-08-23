import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as ProjectActions from "../actions";
import { bindActionCreators } from "redux";

class TestMessage extends React.Component {
  componentDidMount() {
    console.log(process.env);
  }
  handleClick = () => {
    const { printMessage } = this.props;
    printMessage();
  };

  handleFetchUsers(URL_order) {
    const { retrieveUsers } = this.props;
    retrieveUsers(URL_order);
  }

  render() {
    const { isFetching, errorDetails, message, users_1, users_2 } = this.props;
    return (
      <div className="message">
        <button onClick={this.handleClick}>Change message</button>
        <p>{message}</p>
        <button onClick={() => this.handleFetchUsers("first")}>
          Fetch Users_1:
        </button>
        <button onClick={() => this.handleFetchUsers("second")}>
          Fetch Users_2:
        </button>
        <p>{isFetching ? "loading" : errorDetails ? errorDetails : null}</p>
        <p style={{ color: "red" }}>
          {users_1 &&
            users_1.length &&
            users_1.map(user => {
              return <span key={user.id}>{user.name} </span>;
            })}
        </p>
        <p style={{ color: "green" }}>
          {users_2 &&
            users_1.length &&
            users_1.map(user => {
              return <span key={user.name}>{user.name} </span>;
            })}
        </p>
      </div>
    );
  }
}

// Set state and action as proptype
TestMessage.propTypes = {
  message: PropTypes.string
};

// Map Redux state to props
function mapStateToProps(state) {
  return {
    isFetching: state.messages.isFetching,
    errorDetails: state.messages.errorDetails,
    message: state.messages.text,
    users_1: state.messages.userInfo_1,
    users_2: state.messages.userInfo_2
  };
}

// Map action to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, ProjectActions), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestMessage);
