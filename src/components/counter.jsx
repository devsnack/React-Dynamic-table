import React, { Component } from "react";
class Counter extends Component {
  state = {
    counter: 0,
  };
  inccounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  deccounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  check = () => {
    return this.state.counter === 0 ? "true" : "";
  };
  render() {
    return (
      <React.Fragment>
        <h1 className={this.setbg()}>{this.setcounter()}</h1>
        <button className={this.setcolor()} onClick={this.inccounter}>
          increment
        </button>
        <button
          className={this.setcolor()}
          onClick={this.deccounter}
          disabled={this.check()}
        >
          decrement
        </button>
      </React.Fragment>
    );
  }
  setbg = () => {
    if (this.state.counter === 0) return "badge badge-warning";
    return "badge badge-primary";
  };
  setcolor() {
    if (this.state.counter === 0) return "btn btn-warning";
    return "btn btn-primary";
  }
  setcounter() {
    let { counter } = this.state;
    return counter === 0 ? "zero" : counter;
  }
}

export default Counter;
