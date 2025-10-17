import React from "react";

function NewArrivals() {
  const brands = [
    { name: "Brand A", img: "https://food-mart-template.vercel.app/images/product-thumb-11.jpg" },
    { name: "Brand B", img: "https://food-mart-template.vercel.app/images/product-thumb-12.jpg" },
    { name: "Brand C", img: "https://food-mart-template.vercel.app/images/product-thumb-13.jpg" },
    { name: "Brand D", img: "https://food-mart-template.vercel.app/images/product-thumb-14.jpg" },
    // more
  ];

  return (
    <section className="section">
      <h2 className="text-center">New Arrivals</h2>
      <div className="brands-container">
        {brands.map((b, idx) => (
          <div key={idx}>
            <img src={b.img} alt={b.name} style={{ width: "100px", height: "auto" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
