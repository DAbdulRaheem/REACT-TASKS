import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>About Us Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
