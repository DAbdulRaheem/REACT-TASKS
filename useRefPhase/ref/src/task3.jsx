
// 🧩 Assignment 3 — Character Count of Textarea (using useRef only)
// 🎯 Concepts: useRef for text extraction, no controlled components
// Question:

// Create a component TextCounter.jsx with a textarea.

// Add a button “Count Characters”.

// When clicked, use useRef to read the textarea content.

// Show the total number of characters typed.

// Example Output:

// Characters typed: 42

import React, { useRef, useState } from 'react';

export function TextCounter() {
  const textareaRef = useRef();
  const [charCount, setCharCount] = useState(0);

  const handleCount = () => {
    const text = textareaRef.current.value;
    setCharCount(text.length);
  };

  return (
    <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
      <textarea ref={textareaRef} placeholder="Type something..."></textarea>
      <button onClick={handleCount}>Count Characters</button>
      <p>Characters typed: {charCount}</p>
    </div>
  );
}       