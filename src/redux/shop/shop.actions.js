import ShopActionTypes from './shop.types';

export const updateProducts = products => ({
  type: ShopActionTypes.UPDATE_PRODUCTS,
  payload: products 
});

export const updateCategories = categories => ({
  type: ShopActionTypes.UPDATE_CATEGORIES,
  payload: categories
});