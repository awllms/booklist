import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

describe('shopReducer test', () => {
  const initialState = {
    products: null,
    categories: null,
    isProductsFetching: false,
    isCategoriesFetching: false,
    error: null
  };

  const mockProducts = [
    {id: 1, name: 'Sample Product'}
  ];
  const mockCategories = [
    {id: 1, name: 'Sample Product'}
  ];

  const mockError = 'There was an error';

  const mockFetchProductsStartAction = {
    type: ShopActionTypes.FETCH_PRODUCTS_START
  };

  const mockFetchProductsSuccessAction = {
    type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: mockProducts
  };

  const mockFetchProductsFailureAction = {
    type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: mockError
  };

  const mockFetchCategoriesStartAction = {
    type: ShopActionTypes.FETCH_CATEGORIES_START
  };

  const mockFetchCategoriesSuccessAction = {
    type: ShopActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: mockCategories
  };

  const mockFetchCategoriesFailureAction = {
    type: ShopActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: mockError
  };

  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_PRODUCTS_START action', () => {
    expect(shopReducer(initialState, mockFetchProductsStartAction)).toEqual({
      ...initialState,
      isProductsFetching: true
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS action', () => {
    expect(shopReducer(initialState, mockFetchProductsSuccessAction)).toEqual({
      ...initialState,
      isProductsFetching: false,
      products: mockFetchProductsSuccessAction.payload
    });
  });

  it('should handle FETCH_PRODUCTS_FAILURE action', () => {
    expect(shopReducer(initialState, mockFetchProductsFailureAction)).toEqual({
      ...initialState,
      isProductsFetching: false,
      error: mockFetchProductsFailureAction.payload
    });
  });

  it('should handle FETCH_CATEGORIES_START action', () => {
    expect(shopReducer(initialState, mockFetchCategoriesStartAction)).toEqual({
      ...initialState,
      isCategoriesFetching: true
    });
  });

  it('should handle FETCH_CATEGORIES_SUCCESS action', () => {
    expect(shopReducer(initialState, mockFetchCategoriesSuccessAction)).toEqual({
      ...initialState,
      isCategoriesFetching: false,
      categories: mockFetchCategoriesSuccessAction.payload
    });
  });

  it('should handle FETCH_CATEGORIES_FAILURE action', () => {
    expect(shopReducer(initialState, mockFetchCategoriesFailureAction)).toEqual({
      ...initialState,
      isCategoriesFetching: false,
      error: mockFetchCategoriesFailureAction.payload
    });
  });
});