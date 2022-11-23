import React, { FC, useState } from "react";
import { Product } from "./interface";

interface Props {
  products: Product[];
}

const findOne = (arr: Product[], id: number) => {
  const one = arr.filter((item) => item.id === id);
  return one[0];
};

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
      <div className="productlist__want">
        {data
          .filter((item) => !item.have)
          .map((item) => (
            <button
              onClick={() => toggleHaveProduct(item.id)}
              key={item.id}
              role={item.have ? "haveProduct" : "wantProduct"}
            >
              {item.name}
            </button>
          ))}
      </div>
      <div className="productlist__have">
        {data
          .filter((item) => item.have)
          .map((item) => (
            <button
              onClick={() => toggleHaveProduct(item.id)}
              key={item.id}
              role={item.have ? "haveProduct" : "wantProduct"}
            >
              {item.name}
            </button>
          ))}
      </div>
    </div>
  );
};
