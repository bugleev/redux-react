import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as ProjectActions from "../actions";
import { bindActionCreators } from "redux";

class MainPage extends React.Component {
  componentDidMount() {
    console.log(process.env);
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="main-content">
          <h1>No content</h1>
        </div>
      </div>
    );
  }
}

// Set state and action as proptype
MainPage.propTypes = {
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
)(MainPage);
