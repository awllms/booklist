import OrdersActionTypes from './orders.types';

const INITIAL_STATE = {
  orderItems: [],
  isOrdersFetching: false,
  isOrderSetting: false,
  error: null
};

const ordersReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case OrdersActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isOrdersFetching: true
      };
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orderItems: action.payload,
        error: null,
        isOrdersFetching: false
      };
    case OrdersActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isOrdersFetching: false
      };
    case OrdersActionTypes.SET_ORDER_START:
      return {
        ...state,
        isOrderSetting: true
      };
    case OrdersActionTypes.SET_ORDER_SUCCESS:
      return {
        ...state,
        isOrderSetting: false
      };
    case OrdersActionTypes.SET_ORDER_FAILURE:
      return {
        ...state,
        isOrderSetting: false
      };
    default:
      return state;
  }
};

export default ordersReducer;
