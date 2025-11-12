// ## 🧩 *Task 1 — Favorite Color Changer*

// *Concepts:* useState, Conditional Styling, onClick event

// ### 📝 *Instructions*

// 1. Create a functional component *ColorChanger.jsx*
// 2. Use useState to store a color name (default: "blue")
// 3. Add a button → *“Change Color”*
// 4. When clicked, toggle text color between *blue* and *red*
// 5. Apply *inline conditional styling* based on the color state

// *💡 Output Example:*


// My favorite color is blue 💙
// [Change Color]


// (After click)


// My favorite color is red ❤️


import { Component } from "react";
import React, { useState } from 'react';

export function ColorChanger() {
    const [color, setColor] = useState("blue");

    const toggleColor = () => {
        setColor(color === "blue" ? "red" : "blue");
    }

    return (
        <div>
            <p style={{ color: color }}>
                My favorite color is {color} {color === "blue" ? "💙" : "❤️"}
            </p>
            <button onClick={toggleColor}>Change Color</button>
        </div>
    );
}