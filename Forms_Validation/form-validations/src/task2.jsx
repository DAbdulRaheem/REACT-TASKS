// # 🧩 Assignment 2 — User Registration Form (Submit-Time Validation)
// ### 🎯 Concepts Covered:
// Controlled Components, useState, onSubmit validation, conditional rendering
// ---
// ### Question:
// Create a component *RegisterForm.jsx* with full form validation on submit.
// ### Form Fields:
// * Full Name
// * Age
// * Gender (radio or select)
// * Bio (textarea)
// ---
// ### Requirements:
// 1. Use *useState* for all fields (controlled components).
// 2. Validate the form only when Submit is clicked:
//    * Full Name → cannot be empty
//    * Age → must be a number and ≥ 18
//    * Gender → must be selected
//    * Bio → must be at least 10 characters
// 3. If any field is invalid → show specific error messages under each field.
// 4. If all fields are valid → show:
//    👉 “Registration Successful!”
// ---
// ### Expected Output Example:
// Full Name: [ ]
// ❌ Name is required
// Age: [17]
// ❌ Age must be 18 or above
// Gender: [ ]
// ❌ Please select a gender
// Bio: [Hello]
// ❌ Bio must be at least 10 characters
// When valid:
// ✅ Registration Successful!


import { useState } from 'react';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm=()=>{
    const newErrors={};

    if(!fullName.trim()){
        newErrors.fullName='Name is required';
    }
    const ageNum=Number(age);
    if(!age || isNaN(ageNum) || ageNum<18){
        newErrors.age='Age must be 18 or above';
    }
    if(!gender){
        newErrors.gender='Please select a gender';
    }
    if(bio.trim().length<10){
        newErrors.bio='Bio must be at least 10 characters';
    }

    return newErrors;   
  }
  return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        const formErrors=validateForm();
        setErrors(formErrors);
        setIsSubmitted(Object.keys(formErrors).length===0);
    }}>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        {errors.fullName && <p>❌ {errors.fullName}</p>}
      </div>
      <div>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {errors.age && <p>❌ {errors.age}</p>}
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        {errors.gender && <p>❌ {errors.gender}</p>}
      </div>
      <div>
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        {errors.bio && <p>❌ {errors.bio}</p>}
      </div>
      <button type="submit">Submit</button>
      {isSubmitted && <p>✅ Registration Successful!</p>}
    </form>
  )
}