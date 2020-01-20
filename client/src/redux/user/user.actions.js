import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = userCredentials => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: userCredentials
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const updateNameStart = (displayName, ownProps) => ({
  type: UserActionTypes.UPDATE_NAME_START,
  payload: { displayName, ownProps }
});

export const updateNameSuccess = currentUser => ({
  type: UserActionTypes.UPDATE_NAME_SUCCESS,
  payload: currentUser
});

export const updateNameFailure = error => ({
  type: UserActionTypes.UPDATE_NAME_FAILURE,
  payload: error
});

export const updateEmailStart = (email, password, ownProps) => ({
  type: UserActionTypes.UPDATE_EMAIL_START,
  payload: { email, password, ownProps }
});

export const updateEmailSuccess = currentUser => ({
  type: UserActionTypes.UPDATE_EMAIL_SUCCESS,
  payload: currentUser
});

export const updateEmailFailure = error => ({
  type: UserActionTypes.UPDATE_EMAIL_FAILURE,
  payload: error
});

export const updatePasswordStart = (oldPassword, newPassword, ownProps) => ({
  type: UserActionTypes.UPDATE_PASSWORD_START,
  payload: { oldPassword, newPassword, ownProps }
});

export const updatePasswordSuccess = currentUser => ({
  type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
  payload: currentUser
});

export const updatePasswordFailure = error => ({
  type: UserActionTypes.UPDATE_PASSWORD_FAILURE,
  payload: error
});
