import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h4>Contact Us</h4>
          <p>123 Market Street</p>
          <p>Hyderabad, Telangana</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="/">Home</a><br />
          <a href="/shop">Shop</a><br />
          <a href="/about">About</a><br />
          <a href="/contact">Contact</a><br />
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="#">Facebook</a><br />
          <a href="#">Instagram</a><br />
          <a href="#">Twitter</a><br />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px", color: "#aaa" }}>
        &copy; 2025 FoodMart Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
