import React, { FC, useState } from "react";
import { Product } from "./interface";
import { findOne } from "../../helpers/findOne";

import "./ProductList.css";

interface Props {
  products: Product[];
}

export const ProductsListComponent: FC<Props> = ({ products }) => {
  const [data, setData] = useState<Product[]>(products);

  const toggleHaveProduct = (id: number) => {
    const product = findOne(data, id);
    const newArr = [
      ...data.filter((product) => product.id !== id),
      { ...product, have: !product.have },
    ];
    setData(newArr);
  };
  return (
    <div className="productslist__wrapper">
      <div className="productslist__title__wrapper">
        <h3 className="productslist__title" role="wantTitle">
          Fruit I need to buy
        </h3>
        <h3 className="productslist__title left__Border" role="haveTitle">
          Fruit I have
        </h3>
      </div>
      <div className="productlist__content">
        <div className="productlist__want productlist__flex">
          {data
            .filter((item) => !item.have)
            .map((item) => (
              <button
                className="product__btn"
                onClick={() => toggleHaveProduct(item.id)}
                key={item.id}
                role={item.have ? "haveProduct" : "wantProduct"}
              >
                {item.name}
              </button>
            ))}
        </div>
        <div className="productlist__have productlist__flex">
          {data
            .filter((item) => item.have)
            .map((item) => (
              <button
                className="product__btn"
                onClick={() => toggleHaveProduct(item.id)}
                key={item.id}
                role={item.have ? "haveProduct" : "wantProduct"}
              >
                {item.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
