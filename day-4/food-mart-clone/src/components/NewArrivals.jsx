import React from "react";

function NewArrivals() {
  const brands = [
    { name: "Amber Jar", img: "https://food-mart-template.vercel.app/images/product-thumb-11.jpg" ,desc:"Honey best nectar you wish to get"},
    { name: "Amber Jar ", img: "https://food-mart-template.vercel.app/images/product-thumb-12.jpg" ,desc:"Honey best nectar you wish to get"},
    { name: "Amber Jar", img: "https://food-mart-template.vercel.app/images/product-thumb-13.jpg" ,desc:"Honey best nectar you wish to get"},
    { name: "Amber Jar", img: "https://food-mart-template.vercel.app/images/product-thumb-14.jpg" ,desc:"Honey best nectar you wish to get"},

  ];

  const sectionStyle = {
    padding: "40px 20px",
    textAlign: "center",
    
    
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#111827",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const brandCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  };

  const brandImageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    position: "relative",
  };

  const brandNameStyle = {
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#111827",
  };

  const descStyle = {
    fontStyle: "bold",
    fontSize: "0.8rem",
    color: "gray",
    textAlign: "center",
    display: "flex",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>New Arrivals</h2>
      <div style={containerStyle}>
        {brands.map((b, idx) => (
          <div
            key={idx}
            style={brandCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={b.img} alt={b.name} style={brandImageStyle} />
            <span style={brandNameStyle}>{b.name}</span>
            <p style={descStyle}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
