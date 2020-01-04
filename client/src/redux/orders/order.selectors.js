import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectOrderItems = createSelector(
  [selectOrders],
  order => order.orderItems
);

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  order => order.isOrdersFetching
);

