import React from "react";

function ProductCard({ title, price, description, image }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "220px",
      textAlign: "center"
    }}>
      <img src={image} alt={title} style={{ width: "100px", height: "100px" }} />
      <h3>{title}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
