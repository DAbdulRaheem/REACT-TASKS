import React from "react";

function BannerCards() {
  const banners = [
    {
      img: "https://food-mart-template.vercel.app/images/product-thumb-1.png",
      title: "Fresh Smoothies",
      subtitle: "Summer Juice Deals",
      height: "300px",
      width: "500px",
    },
    {
      img: "https://food-mart-template.vercel.app/images/banner2.jpg",
      title: "Organic Foods",
      subtitle: "Daily Discounts",
      height: "300px",
      width: "500px",
    },
  ];

  const sectionStyle = {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  };

  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const textOverlayStyle = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 15px",
    borderRadius: "6px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {banners.map((b, i) => (
          <div
            key={i}
            style={{ ...cardStyle, width: b.width, height: b.height }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={b.img} alt={b.title} style={imgStyle} />
            <div style={textOverlayStyle}>
              <h3 style={{ margin: 0 }}>{b.title}</h3>
              <small>{b.subtitle}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );








// const names=["Alex","Brian","Charlie","David"];
// let products=["Laptop","Mobile","Tablet","Monitor"];
// return(
//   <div>
//     {names.map((name, index)=>(
//       <h1 key={index}>User name is {name}</h1>
//     ))}
//     {products.map((product, index)=>(
//       <h1 key={index}>The User {names[index]}'s Product name is {product}</h1>
//     ))}
//   </div>
// );


}

export default BannerCards;
