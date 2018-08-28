import React from "react";
import { connect } from "react-redux";

import { beautifyJSON } from "../../utils";

class OutputWrapper extends React.Component {
  componentDidUpdate() {
    if (this.props.dataOutput) {
      let { dataOutput } = this.props;
      dataOutput = beautifyJSON(JSON.stringify(dataOutput, null, 4));
      document.querySelector("pre").innerHTML = dataOutput;
    }
  }
  render() {
    return (
      <React.Fragment>
        <h4>Response Output</h4>
        <div className="output-body">
          <pre />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  dataOutput: users.dataOutput
});
export default connect(mapStateToProps)(OutputWrapper);
