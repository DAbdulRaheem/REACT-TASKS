import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hi, what you doing?"
    };
  }

  showAnswer = () => {
    this.setState({ message: "I'm writing some React code." });
  };

  showQuestion = () => {
    this.setState({ message: "Hi, what you doing?" });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.message}</h1>
        <div className="buttons">
          <button onClick={this.showAnswer}>Answer</button>
          <button onClick={this.showQuestion}>Question</button>
        </div>
      </div>
    );
  }
}

export default App;
