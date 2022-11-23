import React from "react";
import "./App.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { ProductsListComponent } from "./components/ProductsList/ProductsListComponent";
import { Product } from "./components/ProductsList/interface";

const products: Product[] = [
  { name: "tomato", id: 0, have: false },
  { name: "apple", id: 1, have: false },
  { name: "kiwi", id: 2, have: false },
  { name: "banana", id: 3, have: false },
  { name: "pomelo", id: 4, have: false },
];

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ProductsListComponent products={products} />
    </div>
  );
}

export default App;
