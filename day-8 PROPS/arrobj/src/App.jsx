import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const users = [
    {
      name: "Alice",
      email: "alice@example.com",
      hobbies: ["Reading", "Coding", "Traveling"],
    },
    {
      name: "Bob",
      email: "bob@gmail.com",
      hobbies: ["Reading", "Analyzing", "Playing"],
    },
    {
      name:"Alex",
      email:"alex@gmail.com",
      hobbies: ["Reading", "Coding", "Traveling"],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Information</h1>

      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
