import React from "react";
import "./BannerCards.css"; 

function BannerCards() {
  const banners = [
    {
      img: "https://food-mart-template.vercel.app/images/product-thumb-1.png",
      title: "Fresh Smoothies",
      subtitle: "Summer Juice Deals",
    },
    {
      img: "product-thumb-2.png",
      title: "Organic Foods",
      subtitle: "Daily Discounts",
    },
  ];

  return (
    <section className="banner-section">
      <div className="banner-container">
        {banners.map((b, i) => (
          <div key={i} className="banner-card">
            <img src={b.img} alt={b.title} className="banner-img" />
            <div className="banner-overlay">
              <h3>{b.title}</h3>
              <p>{b.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BannerCards;
