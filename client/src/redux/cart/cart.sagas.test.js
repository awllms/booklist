import { takeLatest, put, all, call } from 'redux-saga/effects';

import { clearCart } from './cart.actions';
import UserActionTypes from '../user/user.types';

import * as cartSaga from './cart.sagas';

describe('on signout success cart saga', () => {
  it('should trigger on CLEAR_CART', () => {
    const generator = cartSaga.onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        cartSaga.clearCartOnSignOut
      )
    );
  });
});

describe('clear cart on sign out', () => {
  const generator = cartSaga.clearCartOnSignOut();
  it('should clear cart on sign out', () => {
    expect(generator.next().value).toEqual(
      put(clearCart())
    );
  });
});

describe('call cart sagas', () => {
  const generator = cartSaga.cartSagas();
  it('should call all cart sagas', () => {
    expect(generator.next().value).toEqual(
      all([
        call(cartSaga.onSignOutSuccess)
      ])
    );
  });
});