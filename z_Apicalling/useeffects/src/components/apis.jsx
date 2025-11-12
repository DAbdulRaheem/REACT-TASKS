// ## 🧩 *Task 1 — Fetch Users (Mounting Phase)*

// ### *Question:*

// Create a React functional component named *UserList.jsx* to display a list of users fetched from an API.

// ### *Requirements:*

// 1. Use *Axios* to fetch data from the API:
//    👉 https://dummyjson.com/users
// 2. Fetch the data *only once* when the component mounts using the useEffect hook with an empty dependency array [].
// 3. Store the user data in a state variable.
// 4. Display each user’s *name* and *email* in a list format.
// 5. While data is being fetched, display the text *“Loading…”* on the screen.

// ### *Expected Output Example:*


// Loading...


// (After data loads)


// User List:
// - Sharath Eppalapally — sharath@gmail.com
// - Riya Patel — riya@gmail.com


// ---

import {Components} from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: 'red' }}>Loading...</div>;
  }

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};