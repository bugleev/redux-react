import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class InputForm_2 extends React.Component {
  state = {
    name: "",
    firstName: "",
    lastName: ""
  };
  componentDidUpdate() {
    console.log("update", this.props);
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, firstName, lastName } = this.state;
    this.props.method({ name, firstName, lastName });
  };
  render() {
    return (
      <div className="input-item">
        <span>
          {this.props.id}. {this.props.label}
        </span>
        <form action="PUT" onSubmit={this.handleSubmit} className="input-form">
          <div>
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="firstName"> firstname </label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName"> lastname </label>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <button>submit</button>
        </form>
        <hr />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { posts } = state;
  return {
    errorDetails: posts.errorDetails,
    dataOutput: posts.dataOutput
  };
}

export default connect(mapStateToProps)(InputForm_2);
