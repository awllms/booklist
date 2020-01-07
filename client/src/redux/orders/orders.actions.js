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

export const setOrderStart = userAndItems => ({
  type: OrdersActionTypes.SET_ORDER_START,
  payload: userAndItems
});

export const setOrderSuccess = () => ({
  type: OrdersActionTypes.SET_ORDER_SUCCESS
});

export const setOrderFailure = error => ({
  type: OrdersActionTypes.SET_ORDER_FAILURE,
  payload: error
});

export const setOrderIsLoading = () => ({
  type: OrdersActionTypes.SET_ORDER_IS_LOADING
});