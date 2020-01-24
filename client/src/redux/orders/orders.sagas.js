import { takeLatest, put, all, call } from 'redux-saga/effects';

import OrderActionTypes from './orders.types';
import { firestore, getUserOrders } from '../../firebase/firebase.utils';
import { fetchOrdersSuccess, 
         fetchOrdersFailure,
         setOrderSuccess,
         setOrderFailure } from './orders.actions';
import OrdersActionTypes from './orders.types';

export function* onFetchOrdersStart() {
  yield takeLatest(
    OrderActionTypes.FETCH_ORDERS_START,
    fetchOrdersAsync
  );
}

export function* onSetOrderStart() {
  yield takeLatest(
    OrdersActionTypes.SET_ORDER_START,
    setOrderAsync
  );
}

export function* fetchOrdersAsync({ payload: currentUserId }) {
  try {
    const ordersSnapShot = yield call(getUserOrders, currentUserId);
    if (ordersSnapShot.empty) {
      // send empty array as success if no orders are found.
      yield put(fetchOrdersSuccess([]));
    }
    const orders = yield ordersSnapShot.docs.map(doc => doc.data());
    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}

export function* setOrderAsync({ payload: { cartItems, currentUser, price } }){
  try {
    const orderRef = yield firestore.collection('orders').doc();
    yield orderRef.set({
      id: orderRef.id,
      total: price,
      userId: currentUser.id,
      createdAt: new Date(),
      products: cartItems.map(item => {
        const { id, imageUrl, price, quantity, routeName, title } = item;
        return {id, imageUrl, price, quantity, routeName, title};
      })
    });
    yield put(setOrderSuccess());
  } catch(error) {
    yield put(setOrderFailure(error))
  }

}

export function* ordersSagas() {
  yield all([
    call(onFetchOrdersStart),
    call(onSetOrderStart)
  ]);
}
