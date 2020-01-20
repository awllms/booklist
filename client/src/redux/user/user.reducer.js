import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.UPDATE_NAME_SUCCESS:
    case UserActionTypes.UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.UPDATE_NAME_FAILURE:
    case UserActionTypes.UPDATE_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;