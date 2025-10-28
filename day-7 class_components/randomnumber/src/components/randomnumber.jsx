import React, { Component } from 'react';
import './random.css';

class RandomNumberGenerator extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState({ number: randomNum });
  }

  render() {
    return (
    <div className="rng-container">
        <div className="rng-card">
    <h1>🎲 Random Number Generator</h1>
    <p>Click the button to generate a number</p>
    <div className="rng-number">{this.state.number}</div>
    <br />
    <button className="rng-button" onClick={this.generateRandomNumber}>Generate Number</button>
  </div>
</div>

    );
  }
}

export default RandomNumberGenerator;
