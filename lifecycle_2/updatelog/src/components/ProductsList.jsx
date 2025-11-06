import React, { Component } from "react";

export class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filteredProducts: [],
      selectedCategory: "All"
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
          filteredProducts: data
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      this.filterProducts();
    }
  }

  filterProducts = () => {
    const { products, selectedCategory } = this.state;

    if (selectedCategory === "All") {
      this.setState({ filteredProducts: products });
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      this.setState({ filteredProducts: filtered });
    }
  };

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { filteredProducts, selectedCategory } = this.state;

    const categories = [
      "All",
      "men's clothing",
      "women's clothing",
      "electronics",
      "jewelery"
    ];

    return (
      <div style={{ padding: "20px" }}>
        <h2>🛍 Product List</h2>

        <div style={{ marginBottom: "20px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => this.handleCategoryChange(cat)}
              style={{
                padding: "10px 15px",
                margin: "5px",
                borderRadius: "8px",
                cursor: "pointer",
                border:
                  selectedCategory === cat
                    ? "2px solid blue"
                    : "1px solid gray",
                backgroundColor:
                  selectedCategory === cat ? "#d0e8ff" : "#f4f4f4"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

    <ul style={{ listStyle: "none", padding: 0 }}>
    {filteredProducts.map((product) => (
    <li key={product.id} style={{display: "flex",alignItems: "center",marginBottom: "15px",border: "1px solid #ddd",padding: "10px",borderRadius: "8px",}}>
    <img src={product.image} alt={product.title} style={{ width: "60px", height: "60px",objectFit: "contain",marginRight: "15px",}}/>
      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

    <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li key={product.id} style={{display: "flex",alignItems: "center",marginBottom: "15px",border: "1px solid #ddd",padding: "10px",borderRadius: "8px",}}>
      <img src={product.image} alt={product.title} style={{ width: "60px", height: "60px", objectFit: "contain", marginRight: "15px",}}/>
      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li key={product.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px", border: "1px solid #ddd", padding: "10px", borderRadius: "8px",}}>
      <img src={product.image}alt={product.title}style={{width: "60px",height: "60px",objectFit: "contain",marginRight: "15px",}}/>

      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li
      key={product.id}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "60px",
          height: "60px",
          objectFit: "contain",
          marginRight: "15px",
        }}
      />

      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li
      key={product.id}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "60px",
          height: "60px",
          objectFit: "contain",
          marginRight: "15px",
        }}
      />

      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li
      key={product.id}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "60px",
          height: "60px",
          objectFit: "contain",
          marginRight: "15px",
        }}
      />

      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li key={product.id} style={{display: "flex",alignItems: "center",marginBottom: "15px",border: "1px solid #ddd",padding: "10px",borderRadius: "8px",}}>
      <img src={product.image} alt={product.title} style={{width: "60px",height: "60px",objectFit: "contain",marginRight: "15px",}}/>

      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

        <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredProducts.map((product) => (
    <li key={product.id}style={{display: "flex",alignItems: "center",marginBottom: "15px",border: "1px solid #ddd",padding: "10px",borderRadius: "8px", }}>
      <img src={product.image} alt={product.title} style={{ width: "60px", height: "60px", objectFit: "contain", marginRight: "15px",}}/>
      <div>
        <strong>{product.title}</strong> <br />
        <span style={{ color: "gray" }}>{product.category}</span>
      </div>
    </li>
  ))}
</ul>

    </div>
    );
  }
}
