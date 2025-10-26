// Define an array of student objects:
// const students = [
//   { id: 1, name: "John", grade: "A" },
//   { id: 2, name: "Emma", grade: "B" },
//   { id: 3, name: "Liam", grade: "A" },
//   { id: 4, name: "Olivia", grade: "C" },
// ];
// Use map() to render a table with columns: ID, Name, and Grade.
// Use the id field as the key prop for each row.

import React from 'react';
import './students.css';

function StudentList() {
    const students = [
        { id: 1, name: "John", grade: "A" },
        { id: 2, name: "Emma", grade: "B" },
        { id: 3, name: "Liam", grade: "A" },
        { id: 4, name: "Olivia", grade: "C" },
      ];

    return (
        <>

            <h1>Student List</h1>

            <table>
              <thead className='Thead'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td data-label="ID">{student.id}</td>
                    <td data-label="Name">{student.name}</td>
                    <td data-label="Grade">{student.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>

        </>
    );
}

export default StudentList;