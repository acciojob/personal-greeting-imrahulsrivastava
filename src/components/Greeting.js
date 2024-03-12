import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  changedText = (event) => {
    const newValue = event.target.value;
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div>
      <label htmlFor="input">Enter your name:</label>
      <br /> <br />
      <input
        type="text"
        id="input"
        value={this.state.value}
        onChange={this.changedText}
      />
      <br />
      <p>{this.state.value ? "Hello " + this.state.value + "!" : null}</p>
    </div>
    );
  }
}
