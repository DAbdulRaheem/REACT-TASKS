import React from "react";

function Navbar() {
  const navStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#22c55e", 
    cursor: "pointer",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "30px",
  };

  const linkStyle = {
    color: "#111827",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const handleHover = (e, enter) => {
    e.target.style.color = enter ? "#22c55e" : "#111827";
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>FoodMart</div>

      <div style={navLinksStyle}>
        {["Home", "Shop", "About", "Contact"].map((item, i) => (
          <a
            key={i}
            href="#"
            style={linkStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
