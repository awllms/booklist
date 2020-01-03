import { takeLatest, put, all, call } from 'redux-saga/effects';

import OrderActionTypes from './orders.types';
import { firestore } from '../../firebase/firebase.utils';
import { fetchOrdersSuccess, fetchOrdersFailure } from './orders.actions';

export function* onFetchOrdersStart() {
  yield takeLatest(
    OrderActionTypes.FETCH_ORDERS_START,
    fetchOrdersAsync
  );
}

export function* fetchOrdersAsync({ payload: currentUserId }) {
  try {
    const ordersSnapShot = yield firestore.collection('orders')
                                          .where('userId', '==', currentUserId)
                                          .get();
    yield console.log(ordersSnapShot)
    if (ordersSnapShot.empty) return;  
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}

export function* ordersSagas() {
  yield all([
    call(onFetchOrdersStart)
  ]);
}
