import ShopActionTypes from './shop.types';
import * as actions from './shop.actions';

describe('Shop action tests', () => {

  const mockProducts = [
    {id: 1, name: 'Sample Product'}
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
});