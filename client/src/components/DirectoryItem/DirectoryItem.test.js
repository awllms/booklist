import React from 'react';
import { shallow } from 'enzyme';
import { DirectoryItem } from './DirectoryItem';
import CustomButton from '../CustomButton/CustomButton';
import { mapDispatchToProps } from './DirectoryItem';

describe('DirectoryItem Component', () => {
  let wrapper;
  let mockItem;
  let mockAddItem;
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
  
  beforeEach(() => {

    mockItem = {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    };

    mockAddItem = jest.fn();
    mockHistory = { push: jest.fn() };

    const mockProps = {
      item: mockItem, 
      addItem: mockAddItem, 
      history: mockHistory
    };

    wrapper = shallow(<DirectoryItem { ...mockProps } />);
  });

  it('should render DirectoryItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for directory-item-image div', () => {
    wrapper.find('.directory-item-image').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked for directory-meta div', () => {
    wrapper.find('.directory-meta').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call addItem when clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should dispatch addItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(mockAddItemAction);
  });
});