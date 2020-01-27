import React from 'react';
import { shallow } from 'enzyme';
import StripeCheckout from 'react-stripe-checkout';
import { StripeCheckoutButton } from './StripeButton';
import { mapDispatchToProps } from './StripeButton';

describe('StripeCheckoutButton Component', () => {
  let wrapper;
  let wrapper2;
  let mockCartItems;
  let mockSetOrderStart;
  let mockCurrentUser;
  let mockHistory;
  let mockClearCart;
  let mockSetOrderIsLoading;
  let mockSetAlert;
  let dummyFunction = jest.fn();

  const mockSetOrderStartAction = {
    cartItems: [{ id: 1}, { id: 2 }, { id: 3 }],
    currentUser: { id: 1, name: 'Sample User'},
    price: 90
  };

  const mockSetAlertAction = { 
    status: 'failure',
    message: 'There was an issue with your payment. Please use the provided credit card.'
  };

  const mockSetOrderStartPayload = {
    type: 'SET_ORDER_START',
    payload: mockSetOrderStartAction
  };

  const mockSetAlertPayload = {
    type: 'SET_ALERT',
    payload: mockSetAlertAction
  };
  
  beforeEach(() => {
    
    mockCartItems = [{ id: 1}, { id: 2 }, { id: 3 }];
    mockSetOrderStart = jest.fn();
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockHistory = { push: jest.fn() };
    mockClearCart = jest.fn();
    mockSetOrderIsLoading = jest.fn();
    mockSetAlert = jest.fn();

    const mockProps = {
      price: 90, 
      cartItems: mockCartItems, 
      setOrderStart: mockSetOrderStart, 
      currentUser: mockCurrentUser, 
      history: mockHistory, 
      clearCart: mockClearCart, 
      setOrderIsLoading: mockSetOrderIsLoading, 
      setAlert: mockSetAlert
    };

    const mockProps2 = {
      price: 90, 
      cartItems: mockCartItems, 
      setOrderStart: mockSetOrderStart, 
      currentUser: null, 
      history: mockHistory, 
      clearCart: mockClearCart, 
      setOrderIsLoading: mockSetOrderIsLoading, 
      setAlert: mockSetAlert
    };
    
    // Signed In User
    wrapper = shallow(<StripeCheckoutButton { ...mockProps } />);
    // Signed Out User
    wrapper2 = shallow(<StripeCheckoutButton { ...mockProps2 } />);
  });

  it('should render StripeCheckoutButton Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render StripeCheckout if user is signed in', () => {
    expect(wrapper.exists(StripeCheckout)).toBe(true);
  });

  it('should dispatch setOrderStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setOrderStart(mockSetOrderStartAction);
    expect(dispatch.mock.calls[0][0]).toEqual(mockSetOrderStartPayload);
  });

  it('should dispatch clearCart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).clearCart();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CLEAR_CART' });
  });

  it('should dispatch setOrderIsLoading action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setOrderIsLoading();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_ORDER_IS_LOADING' });
  });

  it('should dispatch setAlert action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setAlert(mockSetAlertAction);
    expect(dispatch.mock.calls[0][0]).toEqual(mockSetAlertPayload);
  });
});
