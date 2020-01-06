import AlertActionTypes from './alert.types';

const INITIAL_STATE = {
  alert: null
};

const alertReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case AlertActionTypes.SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case AlertActionTypes.REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };
    default:
      return state;
  }
};

export default alertReducer;