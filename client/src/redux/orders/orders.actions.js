import OrdersActionTypes from './orders.types';

export const fetchOrdersStart = currentUser => ({
  type: OrdersActionTypes.FETCH_ORDERS_START,
  payload: currentUser
});

export const fetchOrdersSuccess = orders => ({
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders
});

export const fetchOrdersFailure = error => ({
  type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
  payload: error
});