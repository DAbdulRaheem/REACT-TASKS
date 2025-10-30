import React from "react";
import FruitList from "./components/FruitList";

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
