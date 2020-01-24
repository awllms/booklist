import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

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

  const mockToggleCartHiddenAction = {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };

  const mockAddItemAction = {
    type: CartActionTypes.ADD_ITEM,
    payload: mockCartItem
  };

  const mockRemoveItemAction = {
    type: CartActionTypes.REMOVE_ITEM,
    payload: mockCartItem2
  };

  const mockClearItemAction = {
    type: CartActionTypes.CLEAR_ITEM,
    payload: mockCartItem2
  };

  const mockClearCartAction = {
    type: CartActionTypes.CLEAR_CART
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_CART_HIDDEN action', () => {
    expect(cartReducer(initialState, mockToggleCartHiddenAction)).toEqual({
      ...initialState,
      hidden: !initialState.hidden
    });
  });

  it('should handle ADD_ITEM action', () => {
    expect(cartReducer(initialState, mockAddItemAction)).toEqual({
      ...initialState,
      cartItems: [{...mockCartItem, quantity: 1}]
    });
  });

  it('should handle REMOVE_ITEM action', () => {
    expect(cartReducer(mockState, mockRemoveItemAction)).toEqual({
      ...mockState,
      cartItems: [{ ...mockCartItem2, quantity: 1 }]
    });
  });

  it('should handle CLEAR_ITEM action', () => {
    expect(cartReducer(mockState, mockClearItemAction)).toEqual({
      ...mockState,
      cartItems: []
    });
  });

  it('should handle CLEAR_CART action', () => {
    expect(cartReducer(mockState, mockClearCartAction)).toEqual({
      ...mockState,
      cartItems: []
    });
  });
});