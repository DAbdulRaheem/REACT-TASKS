import React from "react";

function BannerCards() {
  const banners = [
    { img: "https://food-mart-template.vercel.app/images/product-thumb-1.png", title: "Fresh Smoothies", subtitle: "Summer Juice Deals", height: "100px" , width:"100px" },
    { img: "/images/banner2.jpg", title: "Organic Foods", subtitle: "Daily Discounts", height: "200px" },
  ];

  return (
    <section className="section">
      <div className="banner-container">
        {banners.map((b, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={b.img}
              alt={b.title}
              style={{ display: "block", width: "300px", height: "200px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              <h3 style={{ margin: 0 }}>{b.title}</h3>
              <small>{b.subtitle}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BannerCards;
