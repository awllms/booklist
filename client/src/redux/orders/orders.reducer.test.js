import OrdersActionTypes from './orders.types';
import ordersReducer from './orders.reducer';

describe('ordersReducer test', () => {
  const initialState = {
    orderItems: [],
    isOrdersFetching: false,
    isOrderLoading: false,
    error: null
  };

  const mockCurrentUser = {
    id: 1,
    name: 'Sample User'
  };

  const mockOrders = {
    id: 1,
    order: { id: 1, name: 'Sample Item'}
  };

  const mockError = 'There was an error';

  const mockFetchOrdersStartAction = {
    type: OrdersActionTypes.FETCH_ORDERS_START,
    payload: mockCurrentUser
  };

  const mockFetchOrdersSuccessAction = {
    type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
    payload: mockOrders
  };

  const mockFetchOrdersFailureAction = {
    type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
    payload: mockError
  };

  const mockSetOrderSuccessAction = {
    type: OrdersActionTypes.SET_ORDER_SUCCESS
  };

  const mockSetOrderFailureAction = {
    type: OrdersActionTypes.SET_ORDER_FAILURE
  };

  const mockSetOrderIsLoadingAction = {
    type: OrdersActionTypes.SET_ORDER_IS_LOADING
  };

  it('should return the initial state', () => {
    expect(ordersReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FETCH_ORDERS_START action', () => {
    expect(ordersReducer(initialState, mockFetchOrdersStartAction)).toEqual({
      ...initialState,
      isOrdersFetching: true
    });
  });

  it('should handle FETCH_ORDERS_SUCCESS action', () => {
    expect(ordersReducer(initialState, mockFetchOrdersSuccessAction)).toEqual({
      ...initialState,
      orderItems: mockFetchOrdersSuccessAction.payload,
      error: null,
      isOrdersFetching: false
    });
  });

  it('should handle FETCH_ORDERS_FAILURE action', () => {
    expect(ordersReducer(initialState, mockFetchOrdersFailureAction)).toEqual({
      ...initialState,
      error: mockFetchOrdersFailureAction.payload,
      isOrdersFetching: false
    });
  });

  it('should handle SET_ORDER_SUCCESS action', () => {
    expect(ordersReducer(initialState, mockSetOrderSuccessAction)).toEqual({
      ...initialState,
      isOrderLoading: false
    });
  });

  it('should handle SET_ORDER_FAILURE action', () => {
    expect(ordersReducer(initialState, mockSetOrderFailureAction)).toEqual({
      ...initialState,
      isOrderLoading: false
    });
  });

  it('should handle SET_ORDER_IS_LOADING action', () => {
    expect(ordersReducer(initialState, mockSetOrderIsLoadingAction)).toEqual({
      ...initialState,
      isOrderLoading: true
    });
  });
});