// assignment:
// 🧩 Task 1 — Timer with Cleanup
// 🎯 Concepts:

// useEffect, Cleanup Function, setInterval, useState

// 📝 Instructions

// Create a functional component Timer.jsx

// Use useState to store a count (start from 0).

// In useEffect(), start a timer using setInterval() that increases the count every second.

// Return a cleanup function inside useEffect() that clears the interval when the component unmounts.

// Add a “Show / Hide Timer” button in the parent component to test the cleanup (when hidden → timer stops).

// 💡 Example Output
// Timer: 5 seconds
// [Hide Timer]


// (When hidden → timer stops automatically)

import { useState, useEffect } from 'react';
export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
    </div>
  );
}

