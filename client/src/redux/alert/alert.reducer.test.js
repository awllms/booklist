import AlertActionTypes from './alert.types';
import alertReducer from './alert.reducer';

describe('alertReducer test', () => {
  const initialState = {
    alert: null
  };

  const mocksetAlert = {
    type: AlertActionTypes.SET_ALERT,
    payload: 'This is a sample alert.'
  };

  const mockremoveAlert = {
    type: AlertActionTypes.REMOVE_ALERT
  };

  it('should return the initial state', () => {
    expect(alertReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SET_ALERT action', () => {
    expect(alertReducer(initialState, mocksetAlert)).toEqual({
      alert: 'This is a sample alert.'
    });
  });

  it('should handle REMOVE_ALERT action', () => {
    expect(alertReducer(initialState, mockremoveAlert)).toEqual({
      alert: null
    });
  });
});