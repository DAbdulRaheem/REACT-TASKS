// ASSIGNMENT:
// 1.⁠ ⁠create counter application with this buttons increment, decrement, rest with only increase and decrease count between 0 to 10 only
// 2.⁠ ⁠Create random number generation by clicking a button
// 3.⁠ ⁠create react application that can change message from "hi what you doing" to "im writing some react code" by click button answer ->  im writing some react code and by clicking question button -> "hi what you doing"


import React, { Component } from 'react';
import './count.css'

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prev => ({ count: Math.min(10, prev.count + 1) }));
  }
  decrement = () => {
    this.setState(prev => ({ count: Math.max(0, prev.count - 1) }));
  }
  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className='Work'>
        <h2 className='counter'>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Count;

