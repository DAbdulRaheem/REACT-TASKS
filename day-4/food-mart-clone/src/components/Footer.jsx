import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#111827",
    color: "#f3f4f6",
    padding: "40px 20px",
    marginTop: "40px",
  };

  const footerColsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "30px",
  };

  const colStyle = {
    flex: "1",
    minWidth: "200px",
  };

  const headingStyle = {
    fontSize: "1.2rem",
    marginBottom: "15px",
    color: "#22c55e", 
  };

  const linkStyle = {
    color: "#f3f4f6",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: "1.8",
    transition: "color 0.3s ease",
  };

  const handleHover = (e, enter) => {
    e.target.style.color = enter ? "#22c55e" : "#f3f4f6";
  };

  const bottomTextStyle = {
    textAlign: "center",
    marginTop: "30px",
    color: "#9ca3af",
    fontSize: "0.9rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerColsStyle}>
        <div style={colStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p>123 Market Street</p>
          <p>Hyderabad, Telangana</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div style={colStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          {["Home", "Shop", "About", "Contact"].map((link, i) => (
            <div key={i}>
              <a
                href={`/${link.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                {link}
              </a>
            </div>
          ))}
        </div>

        <div style={colStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          {["Facebook", "Instagram", "Twitter"].map((platform, i) => (
            <div key={i}>
              <a
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                {platform}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 📜 Bottom Copyright */}
      <div style={bottomTextStyle}>
        &copy; 2025 FoodMart Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
