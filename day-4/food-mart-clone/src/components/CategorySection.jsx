import React from "react";

const CategorySection = ({ title }) => {
  const categories = [
    {
      img: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
      name: "Fruits & Veges",
    },
    {
      img: "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
      name: "Breads & Sweets",
    },
    {
      img: "https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png",
      name: "Fruits & Veges",
    },
    {
      img: "https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",
      name: "Fruits & Veges",
    },
  ];

  return (
    <section style={{ textAlign: "center", padding: "30px 20px", backgroundColor: "#f9fafb" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#222" }}>
        {title || "Shop by Category"}
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {categories.map((c, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              width: "140px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={c.img}
              alt={c.name}
              style={{ width: "70px", height: "70px", marginBottom: "10px", objectFit: "contain" }}
            />
            <p style={{ margin: 0, fontSize: "1rem", color: "#333" }}>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
