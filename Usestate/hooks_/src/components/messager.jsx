// ## 🧩 *Task 2 — Show/Hide Message*

// *Concepts:* useState, Conditional Rendering

// ### 📝 *Instructions*

// 1. Create a functional component *MessageToggle.jsx*
// 2. Add a button → *“Show / Hide Message”*
// 3. Use useState to manage visibility (true/false)
// 4. If visible → show the message “Welcome to React Hooks!”
// 5. If hidden → show nothing

// *💡 Output Example:*


// [Show / Hide Message]
// Welcome to React Hooks!


// (After click)


// [Show / Hide Message]
import React, { useState } from 'react';
import {Components} from "react";

export function Messager() {
    const [isVisible, setIsVisible] = useState(false);  
const toggleVisibility = () => {
    setIsVisible(!isVisible);
}

    return (
        <div>
            {isVisible && <p>Welcome to React Hooks!</p>}
            <button onClick={toggleVisibility}>{isVisible ? "Hide Message" : "Show Message"}</button>
        </div>
    );
}