import OrdersActionTypes from './orders.types';
import * as actions from './orders.actions';

describe('Orders action tests', () => {

  const mockOrders = {
    id: 1,
    order: { id: 1, name: 'Sample Item'}
  };

  const mockCurrentUser = {
    id: 1,
    name: 'Sample User'
  };

  const mockError = 'There was an error';

  const mockUserAndItems = {
    mockOrders,
    mockCurrentUser
  }

  it('should create an action to fetch order start', () => {
    const expectedAction = {
      type: OrdersActionTypes.FETCH_ORDERS_START,
      payload: mockCurrentUser
    };
    expect(actions.fetchOrdersStart(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action when fetching the order is a success', () => {
    const expectedAction = {
      type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
      payload: mockOrders
    };
    expect(actions.fetchOrdersSuccess(mockOrders)).toEqual(expectedAction);
  });

  it('should create an action when fetching the order is a failure', () => {
    const expectedAction = {
      type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
      payload: mockError
    };
    expect(actions.fetchOrdersFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action to begin set order start', () => {
    const expectedAction = {
      type: OrdersActionTypes.SET_ORDER_START,
      payload: mockUserAndItems
    };
    expect(actions.setOrderStart(mockUserAndItems)).toEqual(expectedAction);
  });

  it('should create an action on set order success', () => {
    const expectedAction = {
      type: OrdersActionTypes.SET_ORDER_SUCCESS
    };
    expect(actions.setOrderSuccess()).toEqual(expectedAction);
  });

  it('should create an action on set order failure', () => {
    const expectedAction = {
      type: OrdersActionTypes.SET_ORDER_FAILURE,
      payload: mockError
    };
    expect(actions.setOrderFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action when order is loading', () => {
    const expectedAction = {
      type: OrdersActionTypes.SET_ORDER_IS_LOADING
    };
    expect(actions.setOrderIsLoading()).toEqual(expectedAction);
  });
});