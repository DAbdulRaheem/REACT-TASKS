import React from "react";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    { id: 1, name: "John", grade: "A" },
    { id: 2, name: "Emma", grade: "B" },
    { id: 3, name: "Liam", grade: "C" },
  ];

  return (
    <div>
      <StudentList students={students} />
    </div>
  );
}

export default App;
