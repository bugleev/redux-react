import React from "react";
import { connect } from "react-redux";

const ErrorStatus = props => (
  <div className="error-wrapper">
    <h4>Error Status</h4>
    <div className="error-body">
      <p className="error-status__text">
        {props.errorDetails ? props.errorDetails : null}
      </p>
    </div>
  </div>
);

const mapStateToProps = ({ users }) => ({
  errorDetails: users.errorDetails
});

export default connect(mapStateToProps)(ErrorStatus);
