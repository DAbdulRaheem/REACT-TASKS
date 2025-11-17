// 🧩 Assignment 2 — Reset Input Fields Using useRef
// 🎯 Concepts: useRef to clear values, uncontrolled input
// Question:

// Create a component ResetForm.jsx with two input fields:

// Name

// Email
// Use two refs to access both inputs.

// When the user clicks the “Reset” button:

// Clear both inputs by setting ref.current.value = "".

// Show a message: “Form has been reset.”

import React, { useRef, useState } from 'react';

export function ResetForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [message, setMessage] = useState('');

  const handleReset = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    setMessage('Form has been reset.');
  }
    return (    
        <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <button onClick={handleReset}>Reset</button>
        <p>{message}</p>
    </div>
  );
}   
