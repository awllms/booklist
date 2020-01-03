import OrdersActionTypes from './orders.types';

const INITIAL_STATE = {
  orderItems: [],
  isOrdersFetching: false,
  error: null
};

const ordersReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case OrdersActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isOrdersFetching: !state.isOrdersFetching
      };
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orderItems: action.payload,
        error: null
      };
    case OrdersActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
