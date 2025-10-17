import React from "react";

function TrendingProducts() {
  const products = [
    {
      name: "Apple",
      price: "$2.50",
      img: "/images/apple.jpg",
    },
    {
      name: "Banana",
      price: "$1.20",
      img: "/images/banana.jpg",
    },
    {
      name: "Orange",
      price: "$1.80",
      img: "/images/orange.jpg",
    },
    {
      name: "Strawberry",
      price: "$3.50",
      img: "/images/strawberry.jpg",
    },
    // more...
  ];

  return (
    <section className="section">
      <h2 className="text-center">Trending Products</h2>
      <div className="products-grid">
        {products.map((p, idx) => (
          <div key={idx} style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
            <img
              src={p.img}
              alt={p.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h4 style={{ margin: "0 0 8px" }}>{p.name}</h4>
              <p style={{ margin: 0, color: "#888" }}>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
