import React from 'react';
import { shallow } from 'enzyme';
import { AccountPage } from './AccountPage';
import { mapDispatchToProps } from './AccountPage';

describe('AccountPage Component', () => {
  let wrapper;
  let mockCurrentUser;
  let mockFetchOrdersStart;
  let mockOrderItems;
  let mockHistory;
  let dummyFunction = jest.fn();

  const mockPayload = {
    type: 'FETCH_ORDERS_START',
    payload: 1
  };
  
  beforeEach(() => {

    mockCurrentUser = { id: 1, displayName: 'Sample User'};
    mockFetchOrdersStart = jest.fn();
    mockOrderItems = [{id: 1}, {id: 2}, {id: 3}];
    mockHistory = { push: jest.fn() };

    const mockProps = {
      currentUser: mockCurrentUser, 
      fetchOrdersStart: mockFetchOrdersStart, 
      orderItems: mockOrderItems,
      history: mockHistory
    };
    
    wrapper = shallow(<AccountPage { ...mockProps } />);
  });

  it('should render AccountPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for edit-profile', () => {
    wrapper.find('.edit-profile').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should dispatch fetchOrdersStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchOrdersStart(1);
    expect(dispatch.mock.calls[0][0]).toEqual(mockPayload);
  });
});
