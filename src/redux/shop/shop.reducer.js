import SHOP_DATA from '../ShopData';

const INITIAL_STATE = {
  products: SHOP_DATA.products,
  categories: SHOP_DATA.categories
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default shopReducer;