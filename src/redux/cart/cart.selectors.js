import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity, 0)
);
