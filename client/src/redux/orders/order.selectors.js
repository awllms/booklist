import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectOrderItems = createSelector(
  [selectOrders],
  order => order.orderItems
);
