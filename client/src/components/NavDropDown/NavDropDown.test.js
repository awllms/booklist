import React from 'react';
import { shallow } from 'enzyme';
import { NavDropDown } from './NavDropDown';
import { mapDispatchToProps } from './NavDropDown';

describe('NavDropDown Component', () => {
  let wrapper;
  let wrapper2;
  let mockHistory;
  let mockCurrentUser; 
  let mockSignOutStart; 
  let mockToggleNavHidden;
  let dummyFunction = jest.fn();
  
  beforeEach(() => {

    mockHistory = { push: jest.fn() };
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockSignOutStart = jest.fn();
    mockToggleNavHidden = jest.fn();

    const mockProps = {
      history: mockHistory, 
      currentUser: mockCurrentUser, 
      signOutStart: mockSignOutStart, 
      toggleNavHidden: mockToggleNavHidden
    };

    const mockProps2 = {
      history: mockHistory,
      currentUser: null, 
      signOutStart: mockSignOutStart, 
      toggleNavHidden: mockToggleNavHidden
    };
    
    // Signed In User
    wrapper = shallow(<NavDropDown { ...mockProps } />);
    // Signed Out User
    wrapper2 = shallow(<NavDropDown { ...mockProps2 } />);
  });

  it('should render NavDropDown Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked for nav-dropdown-shop-link div', () => {
    wrapper.find('#nav-dropdown-shop-link').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call toggleCartHidden when clicked for nav-dropdown-shop-link div', () => {
    wrapper.find('#nav-dropdown-shop-link').simulate('click');
    expect(mockToggleNavHidden).toHaveBeenCalled();
  });

  it('should call history.push when clicked for nav-dropdown-account-link div', () => {
    wrapper.find('#nav-dropdown-account-link').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call toggleCartHidden when clicked for nav-dropdown-account-link div', () => {
    wrapper.find('#nav-dropdown-account-link').simulate('click');
    expect(mockToggleNavHidden).toHaveBeenCalled();
  });

  it('should call signOutStart when clicked for nav-dropdown-signout-link div', () => {
    wrapper.find('#nav-dropdown-signout-link').simulate('click');
    expect(mockSignOutStart).toHaveBeenCalled();
  });

  it('should call toggleCartHidden when clicked for nav-dropdown-signout-link div', () => {
    wrapper.find('#nav-dropdown-signout-link').simulate('click');
    expect(mockToggleNavHidden).toHaveBeenCalled();
  });

  it('should call history.push when clicked for nav-dropdown-signin-link div', () => {
    wrapper2.find('#nav-dropdown-signin-link').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should call toggleCartHidden when clicked for nav-dropdown-signin-link div', () => {
    wrapper2.find('#nav-dropdown-signin-link').simulate('click');
    expect(mockToggleNavHidden).toHaveBeenCalled();
  });

  it('should call history.push when clicked for nav-dropdown-checkout-link div', () => {
    wrapper.find('#nav-dropdown-checkout-link').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it('should show account link if user is signed in', () => {
    expect(wrapper.exists('#nav-dropdown-account-link')).toBe(true);
  });

  it('should not show account link if user is not signed in', () => {
    expect(wrapper2.exists('#nav-dropdown-account-link')).toBe(false);
  });

  it('should show signout link if user is signed in', () => {
    expect(wrapper.exists('#nav-dropdown-signout-link')).toBe(true);
  });

  it('should not show signout link if user is not signed in', () => {
    expect(wrapper2.exists('#nav-dropdown-signout-link')).toBe(false);
  });

  it('should not show signin link if user is signed in', () => {
    expect(wrapper.exists('#nav-dropdown-signin-link')).toBe(false);
  });

  it('should show signin link if user is not signed in', () => {
    expect(wrapper2.exists('#nav-dropdown-signin-link')).toBe(true);
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
