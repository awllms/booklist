import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './CheckoutItem';
import { mapDispatchToProps } from './CheckoutItem';

describe('CheckoutItem Component', () => {
  let wrapper;
  let mockItem;
  let mockAddItem;
  let mockRemoveItem;
  let mockClearItem;
  let mockHistory;

  const mockAddItemAction = {
    type: 'ADD_ITEM', 
    payload: {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    }
  }

  const mockRemoveItemAction = {
    type: 'REMOVE_ITEM', 
    payload: {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    }
  }

  const mockClearItemAction = {
    type: 'CLEAR_ITEM', 
    payload: {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    }
  }
  
  beforeEach(() => {

    mockItem = {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    };

    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();
    mockClearItem = jest.fn();
    mockHistory = { push: jest.fn() };

    const mockProps = {
      item: mockItem, 
      addItem: mockAddItem, 
      removeItem: mockRemoveItem, 
      clearItem: mockClearItem, 
      history: mockHistory
    };

    wrapper = shallow(<CheckoutItem { ...mockProps } />);
  });

  it('should render CheckoutItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked', () => {
    wrapper.find('.image-container').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked 2', () => {
    wrapper.find('.title').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call removeItem when clicked', () => {
    wrapper.find('#checkout-remove-item').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when clicked', () => {
    wrapper.find('#checkout-add-item').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should call clearItem when clicked', () => {
    wrapper.find('.remove').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should dispatch addItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(mockAddItemAction);
  });

  it('should dispatch removeItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).removeItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(mockRemoveItemAction);
  });
  
  it('should dispatch removeItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).clearItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(mockClearItemAction);
  });
});