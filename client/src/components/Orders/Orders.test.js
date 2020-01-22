import React from 'react';
import { shallow } from 'enzyme';
import { Orders } from './Orders';
import OrderItems from '../OrderItems/OrderItems';

describe('Orders Component', () => {
  let wrapper;
  let wrapper2;
  let mockOrderItems;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {
    
    mockOrderItems = [{id: 1}, {id: 2}, {id: 3}];

    const mockProps = {
      orderItems: mockOrderItems
    };

    const mockProps2 = {
      orderItems: []
    };
    
    // With Order Items
    wrapper = shallow(<Orders { ...mockProps } />);
    // Without Order Items
    wrapper2 = shallow(<Orders { ...mockProps2 } />);
  });

  it('should render Orders Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render same amount of OrderItems components as orderItems', () => {
    expect(wrapper.find(OrderItems).length).toEqual(mockOrderItems.length);
  });

  it('should not render OrderItems components if orderItems is empty', () => {
    expect(wrapper2.exists(OrderItems)).toBe(false);
  });

  it('should show empty message if orderItems are empty', () => {
    expect(wrapper2.exists('.orders-empty-message')).toBe(true);
  });

  it('should not show empty message if orderItems are empty', () => {
    expect(wrapper.exists('.orders-empty-message')).toBe(false);
  });
});
