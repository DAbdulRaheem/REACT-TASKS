import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import BannerCards from "./components/BannerCards";
import NewArrivals from "./components/NewArrivals";
import TrendingProducts from "./components/TrendingProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategorySection title="Categories" />
      {/* <BannerCards /> */}
      <NewArrivals />
      {/* <TrendingProducts /> */}
      <Footer />
    </div>
  );
}

export default App;
