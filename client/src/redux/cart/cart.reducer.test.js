import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';
import { addItemToCart, removeItemFromCart } from './cart.utils';

describe('cartReducer test', () => {
  const initialState = {
    hidden: true,
    cartItems: []
  };

  const mockCartItem = {
    id: 1,
    name: 'Sample Item'
  };

  const mockCartItem2 = {
    id: 1,
    name: 'Sample Item',
    quantity: 2
  };

  const mockState = {
    hidden: true,
    cartItems: [
      mockCartItem2
    ]
  };

  const mockAddItem = {
    type: CartActionTypes.ADD_ITEM,
    payload: mockCartItem
  };

  const mockRemoveItem = {
    type: CartActionTypes.REMOVE_ITEM,
    payload: mockCartItem2
  };

  const mockClearItem = {
    type: CartActionTypes.CLEAR_ITEM,
    payload: mockCartItem2
  };

  const mockClearCart = {
    type: CartActionTypes.CLEAR_CART
  };

  it('should return the initial state', () => {
    expect(cartReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle ADD_ITEM action', () => {
    expect(cartReducer(initialState, mockAddItem)).toEqual({
      ...initialState,
      cartItems: [{...mockCartItem, quantity: 1}]
    });
  });

  it('should handle REMOVE_ITEM action', () => {
    expect(cartReducer(mockState, mockRemoveItem)).toEqual({
      ...mockState,
      cartItems: [{ ...mockCartItem2, quantity: 1 }]
    });
  });

  it('should handle CLEAR_ITEM action', () => {
    expect(cartReducer(mockState, mockClearItem)).toEqual({
      ...mockState,
      cartItems: []
    });
  });

  it('should handle CLEAR_CART action', () => {
    expect(cartReducer(mockState, mockClearCart)).toEqual({
      ...mockState,
      cartItems: []
    });
  });
});