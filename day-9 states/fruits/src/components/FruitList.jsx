import React, { Component } from "react";

export class FruitList extends Component {
  render() {
    const { fruits } = this.props;
    return (
      <div style={{ padding: "20px" }}>
        <h2>Fruits List:</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FruitList;
