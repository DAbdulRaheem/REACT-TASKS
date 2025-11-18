// assignment:
// # 🧩 Assignment 1 — Login Form Validation (Controlled Components)

// ### 🎯 Concepts Covered:

// useState, Controlled Inputs, onSubmit, e.preventDefault(), form-level validation

// ---

// ### Question:

// Create a component *LoginForm.jsx* using controlled inputs.

// ### Requirements:

// 1. Add two controlled input fields:

//    * Email
//    * Password
// 2. Use useState to manage both values.
// 3. When the user submits the form:

//    * Use e.preventDefault() to stop reload
//    * Validate fields:

//      * Email → must include "@"
//      * Password → must be at least 6 characters
// 4. If validation fails → show error messages below the form.
// 5. If validation passes → show a success message:
//    👉 “Login Successful!”

// ---

// ### Expected Output Example:


// Email: [sharathgmail.com]
// Password: [123]

// ❌ Invalid Email
// ❌ Password must be at least 6 characters


// When valid:


// ✅ Login Successful!


// ---




import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newErrors = [];
    if (!email.includes('@')) {
      newErrors.push('Invalid Email');
    }
    if (password.length < 6) {
      newErrors.push('Password must be at least 6 characters');
    }
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors([]);
      setSuccess(true);
    }
  }
  return ( 
        <fieldset>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email: </label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus/>
            <p>{email}</p>
            <label>Password: </label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            {errors.map((error, index) => (
                <div key={index} style={{ color: 'red' }}>❌ {error}</div>
            ))}
            {success && <div style={{ color: 'green' }}>✅ Login Successful!</div>}
            {console.log({email, password})}
          </div>
      </form>
      </fieldset>
  )
}
