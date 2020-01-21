import React from 'react';
import { shallow } from 'enzyme';
import { DirectoryItems } from './DirectoryItems';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

describe('DirectoryItems Component', () => {
  let wrapper;
  let mockItems;
  let mockTitle;
  let mockHistory;
  let dummyFunction = jest.fn()
  
  beforeEach(() => {

    mockTitle = 'Random Title';
    
    mockItems = [
      {
        id: 1,
        title: 'Item 1', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-1'
      },
      {
        id: 2,
        title: 'Item 2', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-2'
      },
      {
        id: 3,
        title: 'Item 3', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-3'
      },
      {
        id: 4,
        title: 'Item 1', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-1'
      },
      {
        id: 5,
        title: 'Item 2', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-2'
      },
      {
        id: 6,
        title: 'Item 3', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-3'
      },
      {
        id: 7,
        title: 'Item 3', 
        imageUrl: 'example.com', 
        quantity: 1, 
        price: 20, 
        routeName: '/products/item-3'
      }
    ];
    
    mockHistory = { push: jest.fn() };

    const mockProps = {
      title: mockTitle, 
      items: mockItems, 
      history: mockHistory
    };

    wrapper = shallow(<DirectoryItems { ...mockProps } />);
  });

  it('should render DirectoryItems Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for h3', () => {
    wrapper.find('h3').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should render Directory Item if component has items', () => {
    expect(wrapper.exists(DirectoryItem)).toBe(true);
  });

  it('should render only 6 or less Directory Item components', () => {
    expect(wrapper.find(DirectoryItem).length).toEqual(6);
  });
  
  it('should not render a Directory Item if items are empty', () => {
    const mockProps = {
      title: mockTitle, 
      items: [], 
      history: mockHistory
    };
    wrapper = shallow(<DirectoryItems { ...mockProps } />)
    expect(wrapper.exists(DirectoryItem)).toBe(false);
    expect(wrapper.find('.directory-items').children().length).toEqual(1);
  });
});
