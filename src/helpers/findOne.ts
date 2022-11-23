import { Product } from "../components/ProductsList/interface";

export const findOne = (arr: Product[], id: number) => {
  const one = arr.filter((item) => item.id === id);
  return one[0];
};
