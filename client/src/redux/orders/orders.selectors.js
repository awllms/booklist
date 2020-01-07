import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectOrderItems = createSelector(
  [selectOrders],
  orders => orders.orderItems
);

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isOrdersFetching
);

export const selectIsOrderLoading = createSelector(
  [selectOrders],
  orders => orders.isOrderLoading
);