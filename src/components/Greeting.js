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
        <p>Enter your name:</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changedText}
        />
        <p>{this.state.value ? ("Hello " + this.state.value + "!") : null}</p>
      </div>
    );
  }
}
