import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './CartIcon';
import { mapDispatchToProps } from './CartIcon';

describe('CartIcon Component', () => {
  let wrapper;
  let mockToggleCartHidden;
  let mockCartTotal;
  
  beforeEach(() => {

    mockToggleCartHidden = jest.fn();

    mockCartTotal = 7

    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
      cartTotal: mockCartTotal
    };

    wrapper = shallow(<CartIcon { ...mockProps } />);
  });

  it('should render CartIcon Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when clicked', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should show cartTotal if there is a cartTotal', () => {
    expect(wrapper.exists('.items-count')).toBe(true);
  });

  it('should not show cartTotal if there is a cartTotal', () => {
    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
      cartTotal: 0
    };
    wrapper = shallow(<CartIcon { ...mockProps } />);
    expect(wrapper.exists('.items-count')).toBe(false);
  });

  it('should dispatch toggleCartHidden action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).toggleCartHidden();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'TOGGLE_CART_HIDDEN' })
  });
});