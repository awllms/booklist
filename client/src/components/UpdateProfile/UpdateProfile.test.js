import React from 'react';
import { shallow } from 'enzyme';
import { UpdateProfile } from './UpdateProfile';
import { mapDispatchToProps } from './UpdateProfile';

describe('UpdateProfile Component', () => {
  let wrapper;
  let mockCurrentUser;
  let mockUpdateNameStart;
  let mockUpdateEmailStart;
  let mockUpdatePasswordStart;
  let mockSetAlert;

  const mockUpdateNamePayload = {
    type: 'UPDATE_NAME_START',
    payload: {
      displayName: 'Sample Name',
      ownProps: undefined
    }
  };

  const mockUpdateEmailStartPayload = {
    type: 'UPDATE_EMAIL_START',
    payload: {
      email: 'email@example.com',
      password: 'password',
      ownProps: undefined
    }
  };

  const mockUpdatePasswordStartPayload = {
    type: 'UPDATE_PASSWORD_START',
    payload: {
      oldPassword: 'oldpassword',
      newPassword: 'newpassword',
      ownProps: undefined
    }
  };

  const mockUserCredentials = {
    displayName: 'Sample Name',
    email: 'email@example.com', 
    password: 'password',
    oldPassword: 'oldpassword',
    newPassword: 'newpassword',
    confirmNewPassword: 'newpassword'
  };

  const mockAlert = {
    status: 'failure',
    message: 'Passwords must match.'
  };

  const mockSetAlertPayload = {
    type: 'SET_ALERT',
    payload: {
      status: 'failure',
      message: 'Passwords must match.'
    }
  };

  const ownProps = {};
  
  beforeEach(() => {
    
    mockCurrentUser = { id: 1, name: 'Sample User'};
    mockUpdateNameStart = jest.fn();
    mockUpdateEmailStart = jest.fn();
    mockUpdatePasswordStart = jest.fn();
    mockSetAlert = jest.fn();

    const mockProps = {
      currentUser: mockCurrentUser, 
      updateNameStart: mockUpdateNameStart, 
      updateEmailStart: mockUpdateEmailStart, 
      updatePasswordStart: mockUpdatePasswordStart, 
      setAlert: mockSetAlert,
      userCredentials: {
        displayName: 'Sample Name',
        email: 'email@example.com', 
        emailInputPassword: '',
        oldPassword: 'oldpassword',
        newPassword: 'newpassword',
        confirmNewPassword: 'newpassword'
      }
    };
    
    wrapper = shallow(<UpdateProfile { ...mockProps } />);
  });

  it('should render UpdateProfile Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch updateNameStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).updateNameStart(mockUserCredentials.displayName, ownProps);
    expect(dispatch.mock.calls[0][0]).toEqual(mockUpdateNamePayload);
  });

  it('should dispatch updateEmailStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).updateEmailStart(
      mockUserCredentials.email,
      mockUserCredentials.password,  
      ownProps
    );
    expect(dispatch.mock.calls[0][0]).toEqual(mockUpdateEmailStartPayload);
  });

  it('should dispatch updatePasswordStart action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).updatePasswordStart(
      mockUserCredentials.oldPassword,
      mockUserCredentials.newPassword,  
      ownProps
    );
    expect(dispatch.mock.calls[0][0]).toEqual(mockUpdatePasswordStartPayload);
  });

  it('should dispatch setAlert action when clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setAlert(mockAlert);
    expect(dispatch.mock.calls[0][0]).toEqual(mockSetAlertPayload);
  });
});
