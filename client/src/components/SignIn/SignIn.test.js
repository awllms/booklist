import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';
import { mapDispatchToProps } from './SignIn';

describe('SignIn Component', () => {
  let wrapper;
  let mockGoogleSignInStart;
  let mockEmailSignInStart;
  let dummyFunction = jest.fn();

  const mockPayload = {
    type: "EMAIL_SIGN_IN_START",
    payload: {
      email: 'email@example.com', 
      password: 'password'
    }
  };
  
  beforeEach(() => {

    mockGoogleSignInStart = jest.fn();
    mockEmailSignInStart = jest.fn();

    const mockProps = {
      googleSignInStart: mockGoogleSignInStart, 
      emailSignInStart: mockEmailSignInStart,
      userCredentials: {
        email: 'email@example.com', 
        password: 'password'
      }
    };
    
    wrapper = shallow(<SignIn { ...mockProps } />);
  });

  it('should render SignIn Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should dispatch googleSignInStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).googleSignInStart();
    expect(dispatch.mock.calls[0][0]).toEqual({type: "SIGN_IN_START"});
  });

  it('should dispatch emailSignInStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).emailSignInStart('email@example.com', 'password');
    expect(dispatch.mock.calls[0][0]).toEqual(mockPayload);
  });
});
