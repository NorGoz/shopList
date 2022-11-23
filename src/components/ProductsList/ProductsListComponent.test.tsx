import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
  const onClick = jest.fn();
  const findOne = (arr: Product[], id: number) => {
    const one = arr.filter((item) => item.id === id);
    return one[0].have;
  };
  render(<ProductsListComponent products={products} />);
  const wantProductsElement = screen.getAllByRole("wantProduct");

  expect(wantProductsElement[0]).toHaveTextContent(products[0].name);
  expect(wantProductsElement[0]).toBeInTheDocument();

  // expect(findOne(products, 1)).toBeFalsy();

  expect(wantProductsElement[1]).toHaveTextContent(products[1].name);
  expect(wantProductsElement[1]).toBeInTheDocument();

  expect(wantProductsElement[2]).toHaveTextContent(products[2].name);
  expect(wantProductsElement[2]).toBeInTheDocument();

  expect(wantProductsElement[3]).toHaveTextContent(products[3].name);
  expect(wantProductsElement[3]).toBeInTheDocument();

  expect(wantProductsElement[4]).toHaveTextContent(products[4].name);
  expect(wantProductsElement[4]).toBeInTheDocument();

  fireEvent.click(wantProductsElement[0]);
  const haveProductsElement = screen.getAllByRole("haveProduct");
  expect(haveProductsElement.length).toBe(1);
});
