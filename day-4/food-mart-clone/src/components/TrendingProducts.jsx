import React from "react";

function TrendingProducts() {
  const products = [
    { name: "Apple", price: "$2.50", img: "/images/apple.jpg" },
    { name: "Banana", price: "$1.20", img: "/images/banana.jpg" },
    { name: "Orange", price: "$1.80", img: "/images/orange.jpg" },
    { name: "Strawberry", price: "$3.50", img: "/images/strawberry.jpg" },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Trending Products</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((p, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "150px",
              overflow: "hidden",
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h4 style={{ margin: "0 0 5px" }}>{p.name}</h4>
              <p style={{ margin: 0, color: "#888" }}>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
