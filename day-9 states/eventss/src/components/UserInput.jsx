import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Enter your name:</h2>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Type your name"
        />
        <h3>Hello, {this.state.username}</h3>
      </div>
    );
  }
}

export default UserInput;
