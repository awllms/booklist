import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as shopSaga from './shop.sagas'; 
import ShopActionTypes from './shop.types';
import { firestore, convertProductsSnapshot, convertCategoriesSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchProductsFailure, 
         fetchCategoriesSuccess, 
         fetchCategoriesFailure, 
         fetchProductsSuccess} from './shop.actions';

describe('on fetch products start saga', () => {
  it('should trigger on FETCH_PRODUCTS_START', () => {
    const generator = shopSaga.fetchProductsStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        ShopActionTypes.FETCH_PRODUCTS_START,
        shopSaga.fetchProductsAsync
      )
    );
  });
});

describe('on fetch categories start saga', () => {
  it('should trigger on FETCH_CATEGORIES_START', () => {
    const generator = shopSaga.fetchCategoriesStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        ShopActionTypes.FETCH_CATEGORIES_START,
        shopSaga.fetchCategoriesAsync
      )
    );
  });
});

describe('fetch products aysnc', () => {
  const generator = shopSaga.fetchProductsAsync();
  const mockError = 'This is an error';
  
  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertProductsSnapshot', () => {
    const mockSnapShot = {};
    expect(generator.next(mockSnapShot).value).toEqual(
      call(convertProductsSnapshot, mockSnapShot)
    );
  });

  it('should fire fetchProductsSuccess', () => {
    const mockProducts = [
      {id: 1, name: 'Sample Product'}
    ];
    expect(generator.next(mockProducts).value).toEqual(
      put(fetchProductsSuccess(mockProducts))
    );
  });

  it('should fire fetchProductsFailure', () => {
    const newGenerator = shopSaga.fetchProductsAsync();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(fetchProductsFailure(mockError))
    );
  });
});

describe('fetch categories aysnc', () => {
  const generator = shopSaga.fetchCategoriesAsync();
  const mockError = 'This is an error';
  
  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCategoriesSnapshotToMap', () => {
    const mockSnapShot = {};
    expect(generator.next(mockSnapShot).value).toEqual(
      call(convertCategoriesSnapshotToMap, mockSnapShot)
    );
  });

  it('should fire fetchCategoriesSuccess', () => {
    const mockCategories = [
      {id: 1, name: 'Sample Product'}
    ];
    expect(generator.next(mockCategories).value).toEqual(
      put(fetchCategoriesSuccess(mockCategories))
    );
  });

  it('should fire fetchCategoriesFailure', () => {
    const newGenerator = shopSaga.fetchCategoriesAsync();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(fetchCategoriesFailure(mockError))
    );
  });
});

describe('call shop sagas', () => {
  const generator = shopSaga.shopSagas();
  it('should call all shop sagas', () => {
    expect(generator.next().value).toEqual(
      all([
        call(shopSaga.fetchProductsStart),
        call(shopSaga.fetchCategoriesStart)
      ])
    );
  });
});