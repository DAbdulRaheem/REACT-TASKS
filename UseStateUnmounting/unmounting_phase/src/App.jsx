import React from 'react';
import { useState } from 'react';
import {Timer} from './components/task1';
import {AutoQuote} from './components/task2';
import {NetworkStatus} from './components/task3';

  const App = () => {
    const [showTimer, setShowTimer] = useState(true);
    
  return <>
    <div>
      <h1>Unmounting Phase Tasks</h1>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
    <AutoQuote />
    <NetworkStatus />
  </>
}


export default App;