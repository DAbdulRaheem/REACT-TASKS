// Task 2:
// Create a new React component called FruitsList.jsx.
// Inside the component, define an array of fruits:
// const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// Use the map() method to display each fruit inside an unordered list (<ul>).
// Assign a unique key prop to each <li> element using the index or fruit name.
// Render the component in your App.js.


import React from 'react'

function FruitsList() {
    const fruits=["Apple", "Banana", "Orange", "Mango", "Grapes"];
    
    return (
        <div>
            <h1>Fruits List </h1>
            <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
            </ul>
        </div>
    );
}

export default FruitsList;