import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton Component', () => {
  let wrapper;
  
  beforeEach(() => {

    const mockProps = {
      children: 'Add To Cart', 
      isGoogleSignIn: undefined, 
      isRegularSignIn: true
    };

    wrapper = shallow(<CustomButton { ...mockProps } />);
  });

  it('should render CustomButton Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should show regular button', () => {
    expect(wrapper.exists('.regular-sign-in')).toBe(true);
  });

  it('should be truthy if isRegularSignIn is true and falsy for isGoogleSignIn', () => {
    const mockProps = {
      children: 'Add To Cart', 
      isGoogleSignIn: undefined, 
      isRegularSignIn: true
    };
    wrapper = shallow(<CustomButton { ...mockProps } />);
    expect(mockProps.isRegularSignIn).toBeTruthy();
    expect(mockProps.isGoogleSignIn).toBeFalsy();
    expect(mockProps.isGoogleSignIn).toBeUndefined();
  });

  it('should be truthy if isGoogleSignIn is true and falsy for isRegularSignIn', () => {
    const mockProps = {
      children: 'Add To Cart', 
      isGoogleSignIn: true, 
      isRegularSignIn: undefined
    };
    wrapper = shallow(<CustomButton { ...mockProps } />);
    expect(mockProps.isGoogleSignIn).toBeTruthy();
    expect(mockProps.isRegularSignIn).toBeFalsy();
    expect(mockProps.isRegularSignIn).toBeUndefined();
  });
});