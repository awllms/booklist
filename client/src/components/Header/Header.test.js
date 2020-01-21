import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import NavDropDown from '../NavDropDown/NavDropDown';
import CartDropDown from '../CartDropDown/CartDropDown';
import { mapDispatchToProps } from './Header';

describe('Header Component', () => {
  let wrapper;
  let mockHistory;
  let mockHidden;
  let mockNavHidden; 
  let mockCurrentUser; 
  let mockSignOutStart; 
  let mockToggleNavHidden;
  let dummyFunction = jest.fn()

  const mockProps2 = {
    history: mockHistory, 
    hidden: false, 
    navHidden: false, 
    currentUser: null, 
    signOutStart: mockSignOutStart, 
    toggleNavHidden: mockToggleNavHidden
  };
  
  beforeEach(() => {
    
    mockHistory = { push: jest.fn() };
    mockHidden = true;
    mockNavHidden = true;
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockSignOutStart = jest.fn();
    mockToggleNavHidden = jest.fn();

    const mockProps = {
      history: mockHistory, 
      hidden: mockHidden, 
      navHidden: mockNavHidden, 
      currentUser: mockCurrentUser, 
      signOutStart: mockSignOutStart, 
      toggleNavHidden: mockToggleNavHidden
    };

    wrapper = shallow(<Header { ...mockProps } />);
  });

  it('should render Header Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for h1', () => {
    wrapper.find('h1').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should not render NavDropDown if navHidden is true', () => {
    expect(wrapper.exists(NavDropDown)).toBe(false);
  });

  it('should render NavDropDown if navHidden is false', () => {
    wrapper = shallow(<Header { ...mockProps2 } />);
    expect(wrapper.exists(NavDropDown)).toBe(true);
  });

  it('should show account link if there is a current user', () => {
    expect(wrapper.exists('#header-account-link')).toBe(true);
  });

  it('should show signout link if there is a current user', () => {
    expect(wrapper.exists('#header-signout-link')).toBe(true);
  });

  it('should not show signin link if there is a current user', () => {
    expect(wrapper.exists('#header-signin-link')).toBe(false);
  });

  it('should not show account link if there is not a current user', () => {
    wrapper = shallow(<Header { ...mockProps2 } />);
    expect(wrapper.exists('#header-account-link')).toBe(false);
  });

  it('should not show signout link if there is not a current user', () => {
    wrapper = shallow(<Header { ...mockProps2 } />);
    expect(wrapper.exists('#header-signout-link')).toBe(false);
  });

  it('should show signin link if there is not a current user', () => {
    wrapper = shallow(<Header { ...mockProps2 } />);
    expect(wrapper.exists('#header-signin-link')).toBe(true);
  });

  it('should not render CartDropDown if hidden is true', () => {
    expect(wrapper.exists(CartDropDown)).toBe(false);
  });

  it('should render CartDropDown if hidden is false', () => {
    wrapper = shallow(<Header { ...mockProps2 } />);
    expect(wrapper.exists(CartDropDown)).toBe(true);
  });

  it('should dispatch signOutStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signOutStart();
    expect(dispatch.mock.calls[0][0]).toEqual({"type": "SIGN_OUT_START"});
  });

  it('should dispatch toggleNavHidden action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).toggleNavHidden();
    expect(dispatch.mock.calls[0][0]).toEqual({"type": "TOGGLE_NAV_HIDDEN"});
  });
});
