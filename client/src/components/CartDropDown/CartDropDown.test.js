import React from 'react';
import { shallow } from 'enzyme';
import { CartDropDown } from './CartDropDown';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

describe('CartDropDown Component', () => {
  let wrapper;
  let mockHistory;
  let mockCartItems;
  
  beforeEach(() => {

    mockHistory = {
      push: jest.fn()
    };

    mockCartItems = [{ id: 1}, { id: 2 }, { id: 3 }];

    const mockProps = {
      history: mockHistory,
      cartItems: mockCartItems
    };

    wrapper = shallow(<CartDropDown { ...mockProps } />);
  });

  it('should render CartDropDown Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty cart message if cartItems are empty', () => {
    const mockProps = {
      history: mockHistory,
      cartItems: []
    }
    wrapper = shallow(<CartDropDown {...mockProps } />);
    expect(wrapper.exists('.cart-message')).toBe(true);
  });

  it('should render correct amount of CartItem components as cartItems length', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
  });

  it('should call history.push when clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});