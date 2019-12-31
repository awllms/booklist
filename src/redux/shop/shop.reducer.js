import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  products: null,
  categories: null,
  isProductsFetching: false,
  isCategoriesFetching: false,
  error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isProductsFetching: true
      };
    case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductsFetching: false,
        products: action.payload
      };
    case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isProductsFetching: false,
        error: action.payload
      };
    case ShopActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isCategoriesFetching: true
      };
    case ShopActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isCategoriesFetching: false,
        categories: action.payload
      };
    case ShopActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isCategoriesFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;