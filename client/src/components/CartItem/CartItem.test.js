import React from 'react';
import { shallow } from 'enzyme';
import { CartItem } from './CartItem';
import { mapDispatchToProps } from './CartItem';

describe('CartItem Component', () => {
  let wrapper;
  let mockItem;
  let mockHistory;
  let mockAddItem;
  let mockRemoveItem;
  
  beforeEach(() => {

    mockItem = { id: 1 };
    mockHistory = { push: jest.fn() };
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      item: mockItem, 
      history: mockHistory, 
      addItem: mockAddItem, 
      removeItem: mockRemoveItem
    };

    wrapper = shallow(<CartItem { ...mockProps } />);
  });

  it('should render CartItem Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked', () => {
    wrapper.find('img').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call history.push when clicked 2', () => {
    wrapper.find('.name').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call removeItem when clicked', () => {
    wrapper.find('#removeItemArrow').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when clicked', () => {
    wrapper.find('#addItemArrow').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should dispatch addItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(
      { type: 'ADD_ITEM', payload: { id: 1 } }
    );
  });

  it('should dispatch removeItem action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).removeItem(mockItem);
    expect(dispatch.mock.calls[0][0]).toEqual(
      { type: 'REMOVE_ITEM', payload: { id: 1 } }
    );
  });
});