import React, { Component } from "react";
import ProductCard from "./ProductCard";
import products from "./products.json";

class ProductList extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Product List</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
