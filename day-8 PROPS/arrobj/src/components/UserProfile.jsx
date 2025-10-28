import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div
        style={{
          border: "1px solid #aaa",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px",
          width: "300px",
          backgroundColor: "skyblue",
          fontFamily:"cursive",
          
        }}
      >
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
        <h3>Hobbies:</h3>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserProfile;
