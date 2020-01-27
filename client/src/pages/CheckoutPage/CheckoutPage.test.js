import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutPage } from './CheckoutPage';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CustomButton from '../../components/CustomButton/CustomButton';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import { mapDispatchToProps } from './CheckoutPage';

describe('CheckoutPage Component', () => {
  let wrapper;
  let wrapper2;
  let wrapper3;
  let mockCartItems;
  let mockTotal;
  let mockCurrentUser;
  let mockSetAlert;
  let mockHistory;

  const mockAlert = {
    status: 'failure',
    message: 'Your cart is empty. Please add an item to complete checkout process.'
  }

  const mockAlertPayload = {
    type: 'SET_ALERT',
    payload: mockAlert
  }
  
  beforeEach(() => {

    mockCartItems = [{ id: 1}, { id: 2 }, { id: 3 }];
    mockTotal = 90;
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockSetAlert = jest.fn();
    
    mockHistory = {
      push: jest.fn()
    };
    

    const mockProps = {
      cartItems: mockCartItems, 
      total: mockTotal, 
      currentUser: mockCurrentUser, 
      setAlert: mockSetAlert,
      history: mockHistory
    };

    const mockProps2 = {
      cartItems: [], 
      total: mockTotal, 
      currentUser: mockCurrentUser, 
      setAlert: mockSetAlert,
      history: mockHistory
    };

    const mockProps3 = {
      cartItems: mockCartItems, 
      total: mockTotal, 
      currentUser: null, 
      setAlert: mockSetAlert,
      history: mockHistory
    };

    wrapper = shallow(<CheckoutPage { ...mockProps } />);
    wrapper2 = shallow(<CheckoutPage { ...mockProps2 } />);
    wrapper3 = shallow(<CheckoutPage { ...mockProps3 } />);
  });

  it('should render CheckoutPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CheckoutItem components if there are cartItems', () => {
    expect(wrapper.exists(CheckoutItem)).toBe(true);
  });

  it('should not render CheckoutItem components if there are no cartItems', () => {
    expect(wrapper2.exists(CheckoutItem)).toBe(false);
  });

  it('should not render checkout empty message if there are cartItems', () => {
    expect(wrapper.exists('.checkout-message')).toBe(false);
  });

  it('should render checkout empty message if there are no cartItems', () => {
    expect(wrapper2.exists('.checkout-message')).toBe(true);
  });

  it('should render StripeCheckoutButton if there are cartItems', () => {
    expect(wrapper.exists(StripeCheckoutButton)).toBe(true);
  });

  it('should not render StripeCheckoutButton if there are no cartItems', () => {
    expect(wrapper2.exists(StripeCheckoutButton)).toBe(false);
  });

  it('should not render CustomButton if there are cartItems', () => {
    expect(wrapper.exists(CustomButton)).toBe(false);
  });

  it('should render CustomButton if there are no cartItems', () => {
    expect(wrapper2.exists(CustomButton)).toBe(true);
  });

  it('should call setAlert when Custom Button component is clicked if there are no cartItems', () => {
    wrapper2.find(CustomButton).simulate('click');
    expect(mockSetAlert).toHaveBeenCalled();
  });

  it('should not render StripeCheckoutButton if there is not a currentUser', () => {
    expect(wrapper3.exists(StripeCheckoutButton)).toBe(false);
  });

  it('should call setAlert when clicked if there is not a currentUser', () => {
    wrapper3.find(CustomButton).simulate('click');
    expect(mockSetAlert).toHaveBeenCalled();
  });

  it('should call history.push when clicked if there is not a currentUser', () => {
    wrapper3.find(CustomButton).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should dispatch setAlert action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setAlert(mockAlert);
    expect(dispatch.mock.calls[0][0]).toEqual(mockAlertPayload);
  });
});