import React, { FC } from "react";
import { Product } from "./interface";

interface Props {
  products: Product[];
}

export const ProductsListComponent: FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id} role="product">
          {item.name}
        </div>
      ))}
    </div>
  );
};
