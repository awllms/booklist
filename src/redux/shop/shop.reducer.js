import SHOP_DATA from '../ShopData';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  products: SHOP_DATA.products,
  categories: SHOP_DATA.categories
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ShopActionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ShopActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;