// 🧩 Task 3 — Online / Offline Detector
// 🎯 Concepts:

// useEffect, Cleanup Function, Event Listeners, Conditional Rendering

// 📝 Instructions

// Create a component NetworkStatus.jsx

// Use useState to store a boolean value isOnline.

// In useEffect(), add event listeners for "online" and "offline" events to detect network status changes.

// Update state based on connectivity.

// Use a cleanup function to remove event listeners on unmount.

// Conditionally render text:

// ✅ “You are Online” (in green)

// ❌ “You are Offline” (in red)

// 💡 Example Output
// ✅ You are Online


// (If disconnected)

// ❌ You are Offline

import { useState, useEffect } from 'react';

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return (
    <div>
      {isOnline ? (
        <h2 style={{ color: 'green' }}>✅ You are Online</h2>
      ) : (
        <h2 style={{ color: 'red' }}>❌ You are Offline</h2>
      )}
    </div>
  );
}       