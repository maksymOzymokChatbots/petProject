import { make } from 'redux-chill';
import { Product } from '@api';

type Item = {
  count: number;
  product: Product;
};

const addItemToBasket = make('[add item to basket] general').stage(
  (item: Item) => item
);

const addItemCount = make('[add count item] general').stage((id: string) => id);

const deleteItemCount = make('[delete count item] general').stage(
  (id: string) => id
);

const deleteItem = make('[delete item] general').stage((id: string) => id);

const basketSubmit = make('[basket] submit');

export {
  addItemToBasket,
  addItemCount,
  deleteItemCount,
  deleteItem,
  basketSubmit
};
