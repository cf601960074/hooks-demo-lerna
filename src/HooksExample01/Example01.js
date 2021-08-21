import React, { Component } from "react";

class Example01 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.handleAddCount}>Click Me</button>
      </div>
    );
  }

  handleAddCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Example01;
