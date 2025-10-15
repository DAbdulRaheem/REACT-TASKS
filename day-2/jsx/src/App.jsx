// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from "react";
import "./App.css";

function App() {
  const user = { name: "Alex", batch: 42 };
  const items = ["Home", "About", "Services", "Contact"];

  return (
    <div className="parent-container">
      <div className="navbar">
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ol>

        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome, {user.name} 👋</h1>
        <p>
          You are in batch <strong>{user.batch}</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;
