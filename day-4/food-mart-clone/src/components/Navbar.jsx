import React from "react";

function Navbar() {
  const navStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <nav className="navbar" style={navStyle}>
      <div className="logo">FoodMart</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
