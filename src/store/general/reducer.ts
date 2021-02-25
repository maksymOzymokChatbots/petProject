import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import {
  addItemToBasket,
  addItemCount,
  deleteItemCount,
  deleteItem,
  basketSubmit
} from './actions';
/**
 * General state
 */

const general = reducer(new GeneralState())
  .on(addItemToBasket, (state, item) => {
    state.basket[item.product.id] = { count: item.count, ...item.product };
  })
  .on(addItemCount, (state, id) => {
    if (state.basket[id].count == 3) return;
    state.basket[id].count += 1;
  })
  .on(deleteItemCount, (state, id) => {
    if (state.basket[id].count == 1) return;
    state.basket[id].count -= 1;
  })
  .on(deleteItem, (state, id) => {
    delete state.basket[id];
  })
  .on(basketSubmit, state => {
    state.basket = {};
  });

export { general };
