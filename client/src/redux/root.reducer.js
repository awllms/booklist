import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import navReducer from './nav/nav.reducer';
import ordersReducer from './orders/orders.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
  nav: navReducer,
  orders: ordersReducer
});

export default persistReducer(persistConfig, rootReducer);