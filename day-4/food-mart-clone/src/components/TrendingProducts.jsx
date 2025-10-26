import React from "react";

function TrendingProducts() {
  const products = [
    { name: "COOKIE", price: "$2.50", img: "cookie.png" },
    { name: "Banana", price: "$1.20", img: "https://food-mart-template.vercel.app/images/thumb-bananas.png" },
    { name: "Milk", price: "$1.80", img: "thumb-milk.png" },
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
