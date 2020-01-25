import UserActionTypes from './user.types';
import userReducer from './user.reducer';

describe('userReducer test', () => {
  const initialState = {
    currentUser: null,
    error: null
  };

  const mockCurrentUser = {
    id: 1,
    displayName: 'Sample User',
    email: 'sampleuser@example.com'
  };

  const mockError = 'There was an error';

  const mockSignInSuccessAction = {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: mockCurrentUser
  };

  const mockUpdateNameSuccessAction = {
    type: UserActionTypes.UPDATE_NAME_SUCCESS,
    payload: mockCurrentUser
  };

  const mockUpdateEmailSuccessAction = {
    type: UserActionTypes.UPDATE_EMAIL_SUCCESS,
    payload: mockCurrentUser
  };

  const mockUpdatePasswordSuccessAction = {
    type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
    payload: mockCurrentUser
  };

  const mockSignInFailureAction = {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: mockError
  };

  const mockSignOutFailureAction = {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: mockError
  };

  const mockUpdateNameFailureAction = {
    type: UserActionTypes.UPDATE_NAME_FAILURE,
    payload: mockError
  };

  const mockUpdateEmailFailureAction = {
    type: UserActionTypes.UPDATE_EMAIL_FAILURE,
    payload: mockError
  };

  const mockUpdatePasswordFailureAction = {
    type: UserActionTypes.UPDATE_PASSWORD_FAILURE,
    payload: mockError
  };

  const mockSignOutSuccessAction = {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: mockError
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SIGN_IN_SUCCESS action', () => {
    expect(userReducer(initialState, mockSignInSuccessAction)).toEqual({
      ...initialState,
      currentUser: mockSignInSuccessAction.payload,
      error: null
    });
  });

  it('should handle SIGN_IN_SUCCESS action', () => {
    expect(userReducer(initialState, mockSignInSuccessAction)).toEqual({
      ...initialState,
      currentUser: mockSignInSuccessAction.payload,
      error: null
    });
  });

  it('should handle UPDATE_NAME_SUCCESS action', () => {
    expect(userReducer(initialState, mockUpdateNameSuccessAction)).toEqual({
      ...initialState,
      currentUser: mockUpdateNameSuccessAction.payload,
      error: null
    });
  });

  it('should handle UPDATE_EMAIL_SUCCESS action', () => {
    expect(userReducer(initialState, mockUpdateEmailSuccessAction)).toEqual({
      ...initialState,
      currentUser: mockUpdateEmailSuccessAction.payload,
      error: null
    });
  });

  it('should handle UPDATE_PASSWORD_SUCCESS action', () => {
    expect(userReducer(initialState, mockUpdatePasswordSuccessAction)).toEqual({
      ...initialState,
      currentUser: mockUpdatePasswordSuccessAction.payload,
      error: null
    });
  });

  it('should handle SIGN_IN_FAILURE action', () => {
    expect(userReducer(initialState, mockSignInFailureAction)).toEqual({
      ...initialState,
      error: mockSignInFailureAction.payload
    });
  });

  it('should handle SIGN_OUT_FAILURE action', () => {
    expect(userReducer(initialState, mockSignOutFailureAction)).toEqual({
      ...initialState,
      error: mockSignOutFailureAction.payload
    });
  });

  it('should handle UPDATE_NAME_FAILURE action', () => {
    expect(userReducer(initialState, mockUpdateNameFailureAction)).toEqual({
      ...initialState,
      error: mockUpdateNameFailureAction.payload
    });
  });

  it('should handle UPDATE_EMAIL_FAILURE action', () => {
    expect(userReducer(initialState, mockUpdateEmailFailureAction)).toEqual({
      ...initialState,
      error: mockUpdateEmailFailureAction.payload
    });
  });

  it('should handle UPDATE_PASSWORD_FAILURE action', () => {
    expect(userReducer(initialState, mockUpdatePasswordFailureAction)).toEqual({
      ...initialState,
      error: mockUpdatePasswordFailureAction.payload
    });
  });

  it('should handle SIGN_OUT_SUCCESS action', () => {
    expect(userReducer(initialState, mockSignOutSuccessAction)).toEqual({
      ...initialState,
      currentUser: null,
      error: null
    });
  });
});