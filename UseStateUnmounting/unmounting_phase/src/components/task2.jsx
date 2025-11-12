// 🧩 Task 2 — Auto Quote Refresher
// 🎯 Concepts:

// useEffect, Cleanup Function, API Fetch + Timer

// 📝 Instructions

// Create a component AutoQuote.jsx

// Use Axios to fetch random quotes from:
// 👉 https://dummyjson.com/quotes/random

// In useEffect(), set an interval to fetch a new quote every 5 seconds.

// Use a cleanup function to clear the interval when the component unmounts.

// Display the quote text on the screen.

// 💡 Example Output
// "Do something today that your future self will thank you for."
// (Changes every 5 seconds)

import { useState, useEffect } from 'react';
import axios from 'axios';

export function AutoQuote() {
  const [quote, setQuote] = useState('');
  
  useEffect(() => {
    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            setQuote(response.data.quote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }
    fetchQuote();

    const intervalId = setInterval(fetchQuote, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>{quote}</h2>
    </div>
  );
}
