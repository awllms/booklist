import React from 'react';
import { shallow } from 'enzyme';
import { OrderItems } from './OrderItems';
import OrderItem from '../OrderItem/OrderItem';
import firebase from '../../firebase/firebase.utils';

describe('OrderItems Component', () => {
  let wrapper;
  let mockOrder;
  let mockProducts;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {
    mockProducts = [{id: 1}, {id: 2}, {id: 3}];
    mockOrder = {
      id: 1, 
      total: 100,
      products: mockProducts,
      createdAt: firebase.firestore.Timestamp.now()
    };

    const mockProps = {
      order: mockOrder
    };
    
    wrapper = shallow(<OrderItems { ...mockProps } />);
  });

  it('should render OrderItems Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render same amount of OrderItem components as products', () => {
    expect(wrapper.find(OrderItem).length).toEqual(mockProducts.length);
  });
});
