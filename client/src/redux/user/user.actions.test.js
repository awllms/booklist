import UserActionTypes from './user.types';
import * as actions from './user.actions';

describe('User action tests', () => {

  const mockCurrentUser = {
    id: 1,
    displayName: 'Sample User',
    email: 'sampleuser@example.com'
  };

  const mockPassword = 1234;

  const mockEmailSignInPayload = {
    email: mockCurrentUser.email, 
    password: mockPassword
  };

  const mockEmailSignUpPayload = {
    displayName: mockCurrentUser.displayName,
    email: mockCurrentUser.email, 
    password: mockPassword
  };

  const mockUpdateNamePayload = {
    displayName: mockCurrentUser.displayName,
    ownProps: 'Sample Props'
  };

  const mockUpdateEmailPayload = {
    email: mockCurrentUser.email,
    password: mockPassword,
    ownProps: 'Sample Props'
  };

  const mockUpdatePasswordPayload = {
    oldPassword: mockPassword,
    newPassword: 'mockPassword',
    ownProps: 'Sample Props'
  };

  const mockError = 'There was an error';

  it('should create an action to start google sign in', () => {
    const expectedAction = {
      type: UserActionTypes.GOOGLE_SIGN_IN_START
    };
    expect(actions.googleSignInStart()).toEqual(expectedAction);
  });

  it('should create an action to start email sign in', () => {
    const expectedAction = {
      type: UserActionTypes.EMAIL_SIGN_IN_START,
      payload: mockEmailSignInPayload
    };
    expect(actions.emailSignInStart(mockEmailSignInPayload)).toEqual(expectedAction);
  });

  it('should create an action for sign in success', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: mockCurrentUser
    };
    expect(actions.signInSuccess(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action for sign in failure', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_IN_FAILURE,
      payload: mockError
    };
    expect(actions.signInFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action for check user session', () => {
    const expectedAction = {
      type: UserActionTypes.CHECK_USER_SESSION
    };
    expect(actions.checkUserSession()).toEqual(expectedAction);
  });

  it('should create an action for sign out start', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_START
    };
    expect(actions.signOutStart()).toEqual(expectedAction);
  });

  it('should create an action for sign out success', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_SUCCESS
    };
    expect(actions.signOutSuccess()).toEqual(expectedAction);
  });

  it('should create an action for sign out failure', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_FAILURE,
      payload: mockError
    };
    expect(actions.signOutFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action for sign up start', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_START,
      payload: mockEmailSignUpPayload
    };
    expect(actions.signUpStart(mockEmailSignUpPayload)).toEqual(expectedAction);
  });

  it('should create an action for sign up success', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: mockCurrentUser
    };
    expect(actions.signUpSuccess(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action for sign up failure', () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_FAILURE,
      payload: mockError
    };
    expect(actions.signUpFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action for update name start', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_NAME_START,
      payload: { ...mockUpdateNamePayload }
    };
    expect(actions.updateNameStart(
      mockUpdateNamePayload.displayName,
      mockUpdateNamePayload.ownProps
    )).toEqual(expectedAction);
  });

  it('should create an action for update name success', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_NAME_SUCCESS,
      payload: mockCurrentUser
    };
    expect(actions.updateNameSuccess(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action for update name failure', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_NAME_FAILURE,
      payload: mockError
    };
    expect(actions.updateNameFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action for update email start', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_EMAIL_START,
      payload: { ...mockUpdateEmailPayload }
    };
    expect(actions.updateEmailStart(
      mockUpdateEmailPayload.email,
      mockUpdateEmailPayload.password,
      mockUpdateEmailPayload.ownProps
    )).toEqual(expectedAction);
  });

  it('should create an action for update email success', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_EMAIL_SUCCESS,
      payload: mockCurrentUser
    };
    expect(actions.updateEmailSuccess(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action for update email failure', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_EMAIL_FAILURE,
      payload: mockError
    };
    expect(actions.updateEmailFailure(mockError)).toEqual(expectedAction);
  });

  it('should create an action for update password start', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_PASSWORD_START,
      payload: { ...mockUpdatePasswordPayload }
    };
    expect(actions.updatePasswordStart(
      mockUpdatePasswordPayload.oldPassword,
      mockUpdatePasswordPayload.newPassword,
      mockUpdatePasswordPayload.ownProps
    )).toEqual(expectedAction);
  });

  it('should create an action for update password success', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
      payload: mockCurrentUser
    };
    expect(actions.updatePasswordSuccess(mockCurrentUser)).toEqual(expectedAction);
  });

  it('should create an action for update password failure', () => {
    const expectedAction = {
      type: UserActionTypes.UPDATE_PASSWORD_FAILURE,
      payload: mockError
    };
    expect(actions.updatePasswordFailure(mockError)).toEqual(expectedAction);
  });
});