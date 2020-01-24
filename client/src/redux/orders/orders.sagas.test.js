import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as orderSaga from './orders.sagas'; 
import OrderActionTypes from './orders.types';
import { firestore, getUserOrders } from '../../firebase/firebase.utils';
import { fetchOrdersSuccess, 
         fetchOrdersFailure,
         setOrderSuccess,
         setOrderFailure } from './orders.actions';
import OrdersActionTypes from './orders.types';

describe('on fetch orders start saga', () => {
  it('should trigger on FETCH_ORDERS_START', () => {
    const generator = orderSaga.onFetchOrdersStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        OrderActionTypes.FETCH_ORDERS_START,
        orderSaga.fetchOrdersAsync
      )
    );
  });
});

describe('on set orders start saga', () => {
  it('should trigger on SET_ORDER_START', () => {
    const generator = orderSaga.onSetOrderStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        OrdersActionTypes.SET_ORDER_START,
        orderSaga.setOrderAsync
      )
    );
  });
});

describe('fetch orders aysnc', () => {
  const currentUserId = {payload: '1sce87ws687dsa4'};
  const generator = orderSaga.fetchOrdersAsync(currentUserId);
  it('should fetch orders from firebase', () => {
    expect(generator.next().value).toEqual(
      call(getUserOrders, currentUserId.payload)
    );
  });

  const mockOrdersSnapShot = {
    empty: false,
    docs: [
      {
        uid: '1sce87ws687dsa4',
        data: () => 'Sample Order'
      }
    ]
  };

  it('should get orders from database', () => {
    expect(generator.next(mockOrdersSnapShot).value).toEqual(['Sample Order']);
  });

  it('should call fetchOrdersSuccess with orders', () => {
    expect(generator.next(['Sample Order']).value).toEqual(
      put(fetchOrdersSuccess(['Sample Order']))
    );
  });

  const newGenerator = orderSaga.fetchOrdersAsync(currentUserId);
  newGenerator.next();
  const mockOrdersSnapShot2 = {
    uid: '1sce87ws687dsa4',
    empty: true
  };

  it('should call fetchOrdersSuccess with empty array', () => {
    expect(newGenerator.next(mockOrdersSnapShot2).value).toEqual(
      put(fetchOrdersSuccess([]))
    );
  });

  it('should call fetchOrdersFailure on error', () => {
    expect(newGenerator.throw('error').value).toEqual(
      put(fetchOrdersFailure('error'))
    );
  });
});

describe('fetch orders aysnc', () => {
  const mockPayload = {payload: { cartItems: [], currentUser: {}, price: 20 }};
  const generator = orderSaga.setOrderAsync(mockPayload);
  generator.next();
  const mockOrderRef = {
    set: () => 'Test Orders'
  };
  it('should set order to firebase', () => {
    expect(generator.next(mockOrderRef).value).toEqual('Test Orders');
  });

  it('should call setOrderSuccess', () => {
    expect(generator.next().value).toEqual(
      put(setOrderSuccess())
    );
  });

  const newGenerator = orderSaga.setOrderAsync(mockPayload);
  newGenerator.next();
  it('should call setOrderFailure on error', () => {
    expect(newGenerator.throw('error').value).toEqual(
      put(setOrderFailure('error'))
    );
  });
});

describe('call orders sagas', () => {
  const generator = orderSaga.ordersSagas();
  it('should call all orders sagas', () => {
    expect(generator.next().value).toEqual(
      all([
        call(orderSaga.onFetchOrdersStart),
        call(orderSaga.onSetOrderStart)
      ])
    );
  });
});