
// 🧩 Task 1 — Fetch Data Using Fetch API in componentDidMount

// Concepts: Mounting Phase, Fetch API, State Update

// 📝 Instructions

// Create a class component UserList.jsx

// Use componentDidMount() to fetch data from this API:
// 👉 https://jsonplaceholder.typicode.com/users

// Store the data in state and display the user names in a list.

// 💡 Output Example:

// User List:
// - Leanne Graham
// - Ervin Howell
// - Clementine Bauch





import React, { Component } from "react";

export class FetchApi extends Component {
  constructor() {
    super();
    this.state = { fetchData: [] };
  }

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ fetchData: data }))
      .catch((error) => console.error("Error fetching users:", error));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        <h2>User List:</h2>
        {this.state.fetchData === undefined ? (
          <h3>Loading ...</h3>
        ) : (
          this.state.fetchData.map((user) => (
            <div key={user.id} style={{border: "1px solid green",margin: "5px",padding: "5px",width: "200px", }}>
              {user.name}
            </div>
          ))
        )}
      </div>
    );
  }
}
