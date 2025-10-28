import StudentCard from "./components/Studentcards";

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Student Details</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <StudentCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8NvNdhcMCivo6YZJp7twf-bEWhlEss2U6Q&s"
          name="John Doe"
          age={22}
          course="React"
        />

        <StudentCard
          img="download.jpeg"
          name="Emma Smith"
          age={20}
          course="Node.js"
        />

        <StudentCard
          img="download (1).jpeg"
          name="Alex YT"
          age={21}
          course="Django"
        />
      </div>
    </div>
  );
}

export default App;
