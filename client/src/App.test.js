import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { mapDispatchToProps } from './App';

describe('App Component', () => {
  let wrapper;
  let wrapper2;
  let mockCurrentUser; 
  let mockHidden;
  let mockNavHidden; 
  let mockFetchProductsStart; 
  let mockFetchCategoriesStart;
  let mockCheckUserSession;
  let mockToggleCartHidden;
  let mockToggleNavHidden;
  let mockOnAppClick;
  let mockEvent;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {

    mockEvent = {
      target: {
        className: 'test-class'
      }
    };
    
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockHidden = true;
    mockNavHidden = true;
    mockFetchProductsStart = jest.fn();
    mockFetchCategoriesStart = jest.fn();
    mockCheckUserSession = jest.fn();
    mockToggleCartHidden = jest.fn();
    mockToggleNavHidden = jest.fn();
    mockOnAppClick = jest.fn(mockEvent);

    const mockProps = {
      currentUser: mockCurrentUser, 
      hidden: mockHidden, 
      navHidden: mockNavHidden, 
      fetchProductsStart: mockFetchProductsStart, 
      fetchCategoriesStart: mockFetchCategoriesStart, 
      checkUserSession: mockCheckUserSession,
      toggleCartHidden: mockToggleCartHidden,
      toggleNavHidden: mockToggleNavHidden
    };

    const mockProps2 = {
      currentUser: null, 
      hidden: false, 
      navHidden: false, 
      fetchProductsStart: mockFetchProductsStart, 
      fetchCategoriesStart: mockFetchCategoriesStart, 
      checkUserSession: mockCheckUserSession,
      toggleCartHidden: mockToggleCartHidden,
      toggleNavHidden: mockToggleNavHidden
    };

    mockEvent = {
      target: {
        className: 'test-class'
      }
    };
    
    // Signed In User
    wrapper = shallow(<App { ...mockProps } />);
    // Signed Out User
    wrapper2 = shallow(<App { ...mockProps2 } />);
  });

  it('should render App Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch fetchProductsStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchProductsStart();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'FETCH_PRODUCTS_START'});
  });

  it('should dispatch fetchCategoriesStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchCategoriesStart();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'FETCH_CATEGORIES_START'});
  });

  it('should dispatch fetchCategoriesStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchCategoriesStart();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'FETCH_CATEGORIES_START'});
  });

  it('should dispatch checkUserSession action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).checkUserSession();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'CHECK_USER_SESSION'});
  });

  it('should dispatch toggleCartHidden action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).toggleCartHidden();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'TOGGLE_CART_HIDDEN'});
  });

  it('should dispatch toggleNavHidden action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).toggleNavHidden();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'TOGGLE_NAV_HIDDEN'});
  });
});
