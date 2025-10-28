import { Component } from "react";

class StudentCard extends Component {
  render() {
    const { img, name, age, course } = this.props;

    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          width: "220px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        {img && (<img src={img} alt={name} style={{ width: "100px",height: "100px",borderRadius: "50%",objectFit: "cover",marginBottom: "10px",}}/>)}

        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
      </div>
    );
  }
}

export default StudentCard;
