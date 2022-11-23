import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { ProductsListComponent } from "../../components/ProductsList/ProductsListComponent";
import { Product } from "../../components/ProductsList/interface";

const initProducts = [
  { name: "tomato", id: 0, have: false },
  { name: "apple", id: 1, have: false },
  { name: "kiwi", id: 2, have: false },
  { name: "banana", id: 3, have: false },
  { name: "pomelo", id: 4, have: false },
];

export const ShopList = () => {
  const [products, setProducts] = useState<Product[]>(initProducts);
  return (
    <div className="shoplist__wrapper">
      <HeaderComponent />
      <ProductsListComponent products={products} />
    </div>
  );
};
