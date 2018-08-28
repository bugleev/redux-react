import React from "react";
import { connect } from "react-redux";
import Spinner from "../custom/Spinner";

const RequestStatus = props => (
  <div className="request-wrapper">
    <h4>Request Status</h4>
    <div className="request-body">
      <p>{props.isFetching ? "loading" : null}</p>
      {props.isFetching ? <Spinner /> : null}
    </div>
  </div>
);

const mapStateToProps = ({ fetchStatus }) => ({
  isFetching: fetchStatus.isFetching
});

export default connect(mapStateToProps)(RequestStatus);
