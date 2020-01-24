import * as actions from './alert.actions';
import AlertActionTypes from './alert.types';

describe('Alert action test', () => {

  it('should create an action to set alert', () => {
    const text = 'Test Alert';
    const expectedAction = {
      type: AlertActionTypes.SET_ALERT,
      payload: text
    };
    expect(actions.setAlert(text)).toEqual(expectedAction);
  });

  it('should remove an action to set alert', () => {
    const expectedAction = {
      type: AlertActionTypes.REMOVE_ALERT,
    };
    expect(actions.removeAlert()).toEqual(expectedAction);
  });
});