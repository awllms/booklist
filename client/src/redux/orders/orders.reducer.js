import OrdersActionTypes from './orders.types';

const INITIAL_STATE = {
  orderItems: [],
  isOrdersFetching: false,
  isOrderLoading: false,
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
    case OrdersActionTypes.SET_ORDER_SUCCESS:
      return {
        ...state,
        isOrderLoading: false
      };
    case OrdersActionTypes.SET_ORDER_FAILURE:
      return {
        ...state,
        isOrderLoading: false
      };
    case OrdersActionTypes.SET_ORDER_IS_LOADING:
      return {
        ...state,
        isOrderLoading: true
      };
    default:
      return state;
  }
};

export default ordersReducer;
