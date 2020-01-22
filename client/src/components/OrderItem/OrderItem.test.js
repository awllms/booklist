import React from 'react';
import { shallow } from 'enzyme';
import { OrderItem } from './OrderItem';

describe('OrderItem Component', () => {
  let wrapper;
  let mockItem;
  let mockHistory;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {

    mockItem = {
      title: 'Item 1', 
      imageUrl: 'example.com', 
      quantity: 1, 
      price: 20, 
      routeName: '/products/item-1'
    };
    
    mockHistory = { push: jest.fn() };

    const mockProps = {
      item: mockItem,
      history: mockHistory
    };
    
    wrapper = shallow(<OrderItem { ...mockProps } />);
  });

  it('should render OrderItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for image-container div', () => {
    wrapper.find('.image-container').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked for title div', () => {
    wrapper.find('.title').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
