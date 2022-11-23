import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductsListComponent } from "./ProductsListComponent";
import { Product } from "./interface";

test("renders products", () => {
  const products: Product[] = [
    { name: "tomato", id: 0, have: false },
    { name: "apple", id: 1, have: false },
    { name: "kiwi", id: 2, have: false },
    { name: "banana", id: 3, have: false },
    { name: "pomelo", id: 4, have: false },
  ];
  render(<ProductsListComponent products={products} />);
  const productsElement = screen.getAllByRole("product");
  expect(productsElement[0]).toHaveTextContent(products[0].name);
  expect(productsElement[0]).toBeInTheDocument();

  expect(productsElement[1]).toHaveTextContent(products[1].name);
  expect(productsElement[1]).toBeInTheDocument();

  expect(productsElement[2]).toHaveTextContent(products[2].name);
  expect(productsElement[2]).toBeInTheDocument();

  expect(productsElement[3]).toHaveTextContent(products[3].name);
  expect(productsElement[3]).toBeInTheDocument();

  expect(productsElement[4]).toHaveTextContent(products[4].name);
  expect(productsElement[4]).toBeInTheDocument();
});
