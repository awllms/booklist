import ShopActionTypes from './shop.types';
import * as actions from './shop.actions';

describe('Shop action tests', () => {

  const mockProducts = [
    {id: 1, name: 'Sample Product'}
  ];

  const mockCategory = [
    {id: 1, name: 'Sample Category'}
  ];

  it('should create an action to fetch products start', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_PRODUCTS_START
    };
    expect(actions.fetchProductsStart()).toEqual(expectedAction);
  });

  it('should create an action to fetch products success', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: mockProducts
    };
    expect(actions.fetchProductsSuccess(mockProducts)).toEqual(expectedAction);
  });

  it('should create an action to fetch products failure', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
      payload: 'error'
    };
    expect(actions.fetchProductsFailure('error')).toEqual(expectedAction);
  });

  it('should create an action to fetch category start', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_CATEGORIES_START
    };
    expect(actions.fetchCategoriesStart()).toEqual(expectedAction);
  });

  it('should create an action to fetch category success', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: mockCategory
    };
    expect(actions.fetchCategoriesSuccess(mockCategory)).toEqual(expectedAction);
  });

  it('should create an action to fetch category failure', () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_CATEGORIES_FAILURE,
      payload: 'error'
    };
    expect(actions.fetchCategoriesFailure('error')).toEqual(expectedAction);
  });
});