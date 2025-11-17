// 🧩 Assignment 1 — Read Input Value Without useState
// 🎯 Concepts: useRef, uncontrolled input, onClick event
// Question:

// Create a component ShowInputValue.jsx using the useRef hook.

// Add an input box for entering text.

// Add a button “Show Value”.

// When clicked, read the input value using ref.current.value (no useState).

// Display the value in a <p> tag below.

import React,{ useRef, } from 'react';

export function ShowInputValue() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value
  };

  return (
    <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
      <p>{inputRef.current?.value}</p>
    </div>
  );
}
