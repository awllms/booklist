import { takeLatest, put, call, all } from 'redux-saga/effects';

import { firestore, convertProductsSnapshot, convertCategoriesSnapshotToMap } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';
import { fetchProductsFailure, 
         fetchCategoriesSuccess, 
         fetchCategoriesFailure, 
         fetchProductsSuccess} from './shop.actions';

export function* fetchProductsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* fetchCategoriesStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* fetchProductsAsync() {
  try {
    const productsRef = firestore.collection('products');
    const productsSnapShot = yield productsRef.get();
    const productList = yield call(convertProductsSnapshot, productsSnapShot);
    yield put(fetchProductsSuccess(productList));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* fetchCategoriesAsync() {
  try {
    const categoriesRef = firestore.collection('categories');
    const categoriesSnapShot = yield categoriesRef.get();
    const categoriesMap = yield call(convertCategoriesSnapshotToMap, categoriesSnapShot);
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

export function* shopSagas() {
  yield all([
    call(fetchProductsStart),
    call(fetchCategoriesStart)
  ]);
}