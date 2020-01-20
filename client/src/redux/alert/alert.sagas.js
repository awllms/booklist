import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import AlertActionTypes from './alert.types';
import OrdersActionTypes from '../orders/orders.types';

import { setAlert, removeAlert } from './alert.actions';

export function* onSetAlert() {
  yield takeLatest(
    AlertActionTypes.SET_ALERT,
    removeSetAlert
  );
}

export function* onSignInSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_IN_SUCCESS,
    showAlertOnSignInSuccess
  );
};

export function* onSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS,
    showAlertOnSignOutSuccess
  );
}

export function* onSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_SUCCESS,
    showAlertOnSignUpSuccess
  )
}

export function* onSignInFailure() {
  yield takeLatest(
    UserActionTypes.SIGN_IN_FAILURE,
    showAlertOnSignInFailure
  );
}

export function* onSignOutFailure() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_FAILURE,
    showAlertOnSignOutFailure
  );
}

export function* onSignUpFailure() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_FAILURE,
    showAlertOnSignUpFailure
  );
}

export function* onSetOrderStart() {
  yield takeLatest(
    OrdersActionTypes.SET_ORDER_START,
    showAlertOnOrdersStart
  )
}

export function* onUpdateNameSuccess() {
  yield takeLatest(
    UserActionTypes.UPDATE_NAME_SUCCESS,
    showAlertOnUpdateNameSuccess
  );
}

export function* onUpdateNameFailure() {
  yield takeLatest(
    UserActionTypes.UPDATE_NAME_FAILURE,
    showAlertOnUpdateNameFailure
  );
}


export function* onUpdateEmailSuccess() {
  yield takeLatest(
    UserActionTypes.UPDATE_EMAIL_SUCCESS,
    showAlertOnUpdateEmailSuccess
  );
}

export function* onUpdateEmailFailure() {
  yield takeLatest(
    UserActionTypes.UPDATE_EMAIL_FAILURE,
    showAlertOnUpdateEmailFailure
  );
}

export function* removeSetAlert() {
  yield delay(3000);
  yield put(removeAlert())
}

export function* showAlertOnSignInSuccess() {
  yield put(setAlert({
    status: 'success', 
    message: 'Welcome back! Login successful!'
  }));
}

export function* showAlertOnSignOutSuccess() {
  yield put(setAlert({
    status: 'success',
    message: `You've been logged out.`
  }));
}

export function* showAlertOnSignUpSuccess() {
  yield put(setAlert({
    status: 'success',
    message: 'Sign up successful!'
  }));
}

export function* showAlertOnSignInFailure() {
  yield put(setAlert({
    status: 'failure', 
    message: 'The email or password is invalid.'
  }));
}

export function* showAlertOnSignOutFailure() {
  yield put(setAlert({
    status: 'failure', 
    message: 'There was an error while trying to sign out.'
  }));
}

export function* showAlertOnSignUpFailure({ payload: { message } }) {
  yield put(setAlert({
    status: 'failure', 
    message: message
  }));
}

export function* showAlertOnOrdersStart() {
  yield put(setAlert({
    status: 'success',
    message: 'Order confirmed!'
  }));
}

export function* showAlertOnUpdateNameSuccess() {
  yield put(setAlert({
    status: 'success',
    message: 'Name Updated Successfully!'
  }));
}

export function* showAlertOnUpdateNameFailure({ payload: { message } }) {
  yield put(setAlert({
    status: 'failure',
    message: message
  }));
}

export function* showAlertOnUpdateEmailSuccess() {
  yield put(setAlert({
    status: 'success',
    message: 'Email Updated Successfully!'
  }));
}

export function* showAlertOnUpdateEmailFailure({ payload: { message } }) {
  yield put(setAlert({
    status: 'failure',
    message: message
  }));
}

export function* alertSagas() {
  yield all([
    call(onSetAlert),
    call(onSignInSuccess),
    call(onSignOutSuccess),
    call(onSignUpSuccess),
    call(onSignInFailure),
    call(onSignOutFailure),
    call(onSignUpFailure),
    call(onSetOrderStart),
    call(onUpdateNameSuccess),
    call(onUpdateNameFailure),
    call(onUpdateEmailSuccess),
    call(onUpdateEmailFailure)
  ]);
}