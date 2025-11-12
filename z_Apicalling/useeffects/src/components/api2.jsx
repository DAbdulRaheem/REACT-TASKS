// ## 🧩 *Task 2 — Filter Users by Gender (Mounting & Updating Phase)*

// ### *Question:*

// Create a functional component named *UserFilter.jsx* that displays users and allows filtering them by gender.

// ### *Requirements:*

// 1. Use *Axios* to fetch user data from the API:
//    👉 https://dummyjson.com/users
// 2. When the component first loads, display *all users*.
// 3. Add a *dropdown* for gender with options:

//    * All
//    * male
//    * female
// 4. Use useState to store:

//    * users — list of users
//    * selectedGender — selected dropdown value
//    * loading — boolean for loading state
// 5. Use *useEffect()* that runs whenever selectedGender changes:

//    * If “All” → fetch all users
//    * Else → fetch filtered data from:
//      👉 https://dummyjson.com/users/filter?key=gender&value={selectedGender}
// 6. Display each user’s *first name, **last name, and **gender*.
// 7. Show *“Loading…”* while fetching data.

// ### *Expected Output Example:*


// Select Gender: [female ▼]

// Users:
// - Riya Patel — female
// - Neha Sharma — female
// - Sarah Kim — female


// (After switching to “male”)


// Users:
// - Sharath Eppalapally — male
// - Karan Mehta — male
// - John Doe — male
// ---

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserFilter = () => {
  const [users, setUsers] = useState([]);
  const [selectedGender, setSelectedGender] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url =
      selectedGender === 'All'
        ? 'https://dummyjson.com/users'
        : `https://dummyjson.com/users/filter?key=gender&value=${selectedGender}`;

    axios.get(url)
      .then(response => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, [selectedGender]);

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      <label>
        Select Gender: 
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="All">All</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>

      {loading ? (
        <div style={{ color: 'blue' }}>Loading...</div>
      ) : (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.firstName} {user.lastName} — {user.gender}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};    

