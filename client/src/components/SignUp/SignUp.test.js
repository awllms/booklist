import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';
import { mapDispatchToProps } from './SignUp';

describe('SignUp Component', () => {
  let wrapper;
  let mockSignUpStart;
  let mockSetAlert;
  let dummyFunction = jest.fn();

  const mockSignUpStartPayload = {
    type: "SIGN_UP_START",
    payload: {
      displayName: 'Sample Name',
      email: 'email@example.com', 
      password: 'password'
    }
  };

  const mockUserCredentials = {
    displayName: 'Sample Name',
    email: 'email@example.com', 
    password: 'password',
  }

  const mockAlert = {
    status: 'failure',
    message: 'Passwords must match.'
  }

  const mockSetAlertPayload = {
    type: "SET_ALERT",
    payload: {
      status: 'failure',
      message: 'Passwords must match.'
    }
  };
  
  beforeEach(() => {

    mockSignUpStart = jest.fn();
    mockSetAlert = jest.fn();

    const mockProps = {
      signUpStart: mockSignUpStart, 
      setAlert: mockSetAlert,
      userCredentials: {
        displayName: 'Sample Name',
        email: 'email@example.com', 
        password: 'password',
        confirmPassword: 'password'
      }
    };
    
    wrapper = shallow(<SignUp { ...mockProps } />);
  });

  it('should render SignUp Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should dispatch signUpStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signUpStart(mockUserCredentials);
    expect(dispatch.mock.calls[0][0]).toEqual(mockSignUpStartPayload);
  });

  it('should dispatch setAlert action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setAlert(mockAlert);
    expect(dispatch.mock.calls[0][0]).toEqual(mockSetAlertPayload);
  });
});
