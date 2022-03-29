import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>{this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock