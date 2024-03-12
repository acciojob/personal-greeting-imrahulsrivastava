import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  changedText = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="input">Enter your name:</label>
        <input
          type="text"
          id="input"
          name="fullName"
          value={this.state.value}
          onChange={this.changedText}
        />
        {this.state.value ? <p>Hello {this.state.value}</p> : null}
      </div>
    );
  }
}
