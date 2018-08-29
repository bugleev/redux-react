import React, { Component } from "react";

export default class TableComponent extends Component {
  state = {
    editMode: false
  };
  componentDidMount() {}
  convertDataToArray = obj => {
    return Object.values(obj).filter(el => typeof el !== "object");
  };
  handleClick = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };
  render() {
    const { data } = this.props;
    // const dataArr = this.convertDataToArray(data);
    // console.log(dataArr);

    return (
      <React.Fragment>
        {this.state.editMode ? null : (
          <button onClick={this.handleClick}>Edit Mode</button>
        )}
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Name</th>
            </tr>
            {[data].map(element => (
              <tr key={element.id}>
                <td>
                  {!this.state.editMode ? (
                    <span style={{ display: "block", width: "100px" }}>
                      {element.id}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={element.id}
                      style={{ display: "block", width: "100px" }}
                    />
                  )}
                </td>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!this.state.editMode ? null : (
          <button onClick={this.handleClick}>Save</button>
        )}
      </React.Fragment>
    );
  }
}
