import React, { FC } from "react";
import { Product } from "./interface";

interface Props {
  products: Product[];
}

export const ProductsListComponent: FC<Props> = ({ products }) => {
  return <div>lista</div>;
};
