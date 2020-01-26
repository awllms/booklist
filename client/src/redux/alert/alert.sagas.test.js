import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import AlertActionTypes from './alert.types';
import OrdersActionTypes from '../orders/orders.types';

import { setAlert, removeAlert } from './alert.actions';

import * as alertSaga from './alert.sagas';

import { signInEmailErrorMessage } from '../../utils/utils';

describe('on set alert alert saga', () => {
  it('should trigger on SET_ALERT', () => {
    const generator = alertSaga.onSetAlert();
    expect(generator.next().value).toEqual(
      takeLatest(
        AlertActionTypes.SET_ALERT,
        alertSaga.removeSetAlert
      )
    );
  });
});

describe('on sign in success alert saga', () => {
  it('should trigger on SIGN_IN_SUCCESS', () => {
    const generator = alertSaga.onSignInSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_IN_SUCCESS,
        alertSaga.showAlertOnSignInSuccess
      )
    );
  });
});

describe('on sign out success alert saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', () => {
    const generator = alertSaga.onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        alertSaga.showAlertOnSignOutSuccess
      )
    );
  });
});

describe('on sign up success alert saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = alertSaga.onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        alertSaga.showAlertOnSignUpSuccess
      )
    );
  });
});

describe('on sign in failure alert saga', () => {
  it('should trigger on SIGN_IN_FAILURE', () => {
    const generator = alertSaga.onSignInFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_IN_FAILURE,
        alertSaga.showAlertOnSignInFailure
      )
    );
  });
});

describe('on sign out failure alert saga', () => {
  it('should trigger on SIGN_OUT_FAILURE', () => {
    const generator = alertSaga.onSignOutFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_OUT_FAILURE,
        alertSaga.showAlertOnSignOutFailure
      )
    );
  });
});

describe('on sign up failure alert saga', () => {
  it('should trigger on SIGN_UP_FAILURE', () => {
    const generator = alertSaga.onSignUpFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_UP_FAILURE,
        alertSaga.showAlertOnSignUpFailure
      )
    );
  });
});

describe('on set order start alert saga', () => {
  it('should trigger on SET_ORDER_START', () => {
    const generator = alertSaga.onSetOrderStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        OrdersActionTypes.SET_ORDER_START,
        alertSaga.showAlertOnOrdersStart
      )
    );
  });
});

describe('on update name success alert saga', () => {
  it('should trigger on UPDATE_NAME_SUCCESS', () => {
    const generator = alertSaga.onUpdateNameSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_NAME_SUCCESS,
        alertSaga.showAlertOnUpdateNameSuccess
      )
    );
  });
});

describe('on update name failure alert saga', () => {
  it('should trigger on UPDATE_NAME_FAILURE', () => {
    const generator = alertSaga.onUpdateNameFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_NAME_FAILURE,
        alertSaga.showAlertOnUpdateNameFailure
      )
    );
  });
});

describe('on update email success alert saga', () => {
  it('should trigger on UPDATE_EMAIL_SUCCESS', () => {
    const generator = alertSaga.onUpdateEmailSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_EMAIL_SUCCESS,
        alertSaga.showAlertOnUpdateEmailSuccess
      )
    );
  });
});

describe('on update email failure alert saga', () => {
  it('should trigger on UPDATE_EMAIL_FAILURE', () => {
    const generator = alertSaga.onUpdateEmailFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_EMAIL_FAILURE,
        alertSaga.showAlertOnUpdateEmailFailure
      )
    );
  });
});

describe('on update password success alert saga', () => {
  it('should trigger on UPDATE_PASSWORD_SUCCESS', () => {
    const generator = alertSaga.onUpdatePasswordSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_PASSWORD_SUCCESS,
        alertSaga.showAlertOnUpdatePasswordSuccess
      )
    );
  });
});

describe('on update password failure alert saga', () => {
  it('should trigger on UPDATE_PASSWORD_SUCCESS', () => {
    const generator = alertSaga.onUpdatePasswordFailure();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_PASSWORD_FAILURE,
        alertSaga.showAlertOnUpdatePasswordFailure
      )
    );
  });
});

describe('remove set alert', () => {
  const generator = alertSaga.removeSetAlert();
  it('should delay removal of alert', () => {
    expect(generator.next().value).toEqual(delay(3000));
  });

  it('should remove an alert', () => {
    expect(generator.next().value).toEqual(put(removeAlert()));
  });
});

describe('show alert on sign in success', () => {
  const generator = alertSaga.showAlertOnSignInSuccess();
  it('should set alert on sign in success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success', 
        message: 'Welcome back! Login successful!'
      }))
    );
  });
});

describe('show alert on sign out success', () => {
  const generator = alertSaga.showAlertOnSignOutSuccess();
  it('should set alert on sign out success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: `You've been logged out.`
      }))
    );
  });
});

describe('show alert on sign up success', () => {
  const generator = alertSaga.showAlertOnSignUpSuccess();
  it('should set alert on sign up success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: 'Sign up successful!'
      }))
    );
  });
});

describe('show alert on sign in failure', () => {
  const generator = alertSaga.showAlertOnSignInFailure();
  it('should set alert on sign in failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: `The email or password is invalid. ${signInEmailErrorMessage}`
      }))
    );
  });
});

describe('show alert on sign out failure', () => {
  const generator = alertSaga.showAlertOnSignOutFailure();
  it('should set alert on sign out failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: 'There was an error while trying to sign out.'
      }))
    );
  });
});

describe('show alert on sign up failure', () => {
  const message = {payload: { message: 'Sign in Failed.'}};
  const generator = alertSaga.showAlertOnSignUpFailure(message);
  it('should set alert on sign up failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: message.payload.message
      }))
    );
  });
});

describe('show alert on order start', () => {
  const generator = alertSaga.showAlertOnOrdersStart();
  it('should set alert on order start', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: 'Order confirmed!'
      }))
    );
  });
});

describe('show alert on update name success', () => {
  const generator = alertSaga.showAlertOnUpdateNameSuccess();
  it('should set alert on update name success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: 'Name Updated Successfully!'
      }))
    );
  });
});

describe('show alert on update name failure', () => {
  const message = {payload: { message: 'Update name Failed.'}};
  const generator = alertSaga.showAlertOnUpdateNameFailure(message);
  it('should set alert on update name failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: message.payload.message
      }))
    );
  });
});

describe('show alert on update email success', () => {
  const generator = alertSaga.showAlertOnUpdateEmailSuccess();
  it('should set alert on update email success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: 'Email Updated Successfully!'
      }))
    );
  });
});

describe('show alert on update email failure', () => {
  const message = {payload: { message: 'Update Email Failed.'}};
  const generator = alertSaga.showAlertOnUpdateEmailFailure(message);
  it('should set alert on update email failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: message.payload.message
      }))
    );
  });
});

describe('show alert on update password success', () => {
  const generator = alertSaga.showAlertOnUpdatePasswordSuccess();
  it('should set alert on update password success', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'success',
        message: 'Password Updated Successfully!'
      }))
    );
  });
});

describe('show alert on update password failure', () => {
  const message = {payload: { message: 'Update Password Failed.'}};
  const generator = alertSaga.showAlertOnUpdatePasswordFailure(message);
  it('should set alert on update password failure', () => {
    expect(generator.next().value).toEqual(
      put(setAlert({
        status: 'failure', 
        message: message.payload.message
      }))
    );
  });
});

describe('call alert sagas', () => {
  const generator = alertSaga.alertSagas();
  it('should call all alert sagas', () => {
    expect(generator.next().value).toEqual(
      all([
        call(alertSaga.onSetAlert),
        call(alertSaga.onSignInSuccess),
        call(alertSaga.onSignOutSuccess),
        call(alertSaga.onSignUpSuccess),
        call(alertSaga.onSignInFailure),
        call(alertSaga.onSignOutFailure),
        call(alertSaga.onSignUpFailure),
        call(alertSaga.onSetOrderStart),
        call(alertSaga.onUpdateNameSuccess),
        call(alertSaga.onUpdateNameFailure),
        call(alertSaga.onUpdateEmailSuccess),
        call(alertSaga.onUpdateEmailFailure),
        call(alertSaga.onUpdatePasswordSuccess),
        call(alertSaga.onUpdatePasswordFailure)
      ])
    );
  });
});