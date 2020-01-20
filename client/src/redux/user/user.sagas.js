import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { auth, 
         googleProvider, 
         createUserProfileDocument,
         updateUserProfileDocument,
         updateUserPassword,
         getCurrentUser } from '../../firebase/firebase.utils';

import { signInSuccess, 
         signInFailure, 
         signOutSuccess, 
         signOutFailure,
         signUpSuccess,
         signUpFailure,
         updateNameSuccess,
         updateNameFailure,
         updateEmailSuccess,
         updateEmailFailure,
         updatePasswordSuccess,
         updatePasswordFailure } from '../user/user.actions';

import { errorMessage, sampleUserId } from '../../utils/utils';

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  )
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  );
}

export function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  );
}

export function* onSignOutStart() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_START,
    signOut
  );
}

export function* onSignUpStart() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_START,
    signUp
  );
}

export function* onSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_SUCCESS,
    signInAfterSignUp
  );
}

export function* onUpdateNameStart() {
  yield takeLatest(
    UserActionTypes.UPDATE_NAME_START,
    updateName
  );
}

export function* onUpdateEmailStart() {
  yield takeLatest(
    UserActionTypes.UPDATE_EMAIL_START,
    updateEmail
  );
}

export function* onUpdatePasswordStart() {
  yield takeLatest(
    UserActionTypes.UPDATE_PASSWORD_START,
    updatePassword
  );
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch(error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, displayName }}) {
  yield getSnapshotFromUserAuth(user, { displayName });
}

export function* updateName({ payload: { displayName, ownProps }}) {
  try {
    const user = yield getCurrentUser();
    if (user.uid === sampleUserId) throw Error(errorMessage);
    const userRef = yield call(updateUserProfileDocument, user, { displayName });
    const userSnapShot = yield userRef.get();
    yield put(updateNameSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    yield call(ownProps.history.push, '/account');
  } catch (error) {
    yield put(updateNameFailure(error));
  }
}

export function* updateEmail({ payload: { email, password, ownProps }}) {
  try {
    const user = yield getCurrentUser();
    if (user.uid === sampleUserId) throw Error(errorMessage);
    const userRef = yield call(updateUserProfileDocument, user, { email, password });
    if (userRef.error) throw Error(userRef.error);
    const userSnapShot = yield userRef.get()
    yield put(updateEmailSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    yield call(ownProps.history.push, '/account');
  } catch (error) {
    yield put(updateEmailFailure(error));
  }
}

export function* updatePassword({ payload: { oldPassword, newPassword, ownProps }}) {
  try {
    const user = yield getCurrentUser();
    if (user.uid === sampleUserId) throw Error(errorMessage);
    const userRef = yield call(updateUserPassword, user, { oldPassword, newPassword });
    if (userRef.error) throw Error(userRef.error);
    const userSnapShot = yield userRef.get()
    yield put(updatePasswordSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    yield call(ownProps.history.push, '/account');
  } catch (error) {
    yield put(updatePasswordFailure(error));
  }
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onUpdateNameStart),
    call(onUpdateEmailStart),
    call(onUpdatePasswordStart)
  ]);
}