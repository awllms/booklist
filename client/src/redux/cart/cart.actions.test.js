import CartActionTypes from './cart.types';
import * as actions from './cart.actions';

describe('Cart action tests', () => {

  const mockItem = {
    id: 1,
    name: 'Sample Item'
  };

  it('should create an action to toggle cart hidden', () => {
    const expectedAction = {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    };
    expect(actions.toggleCartHidden()).toEqual(expectedAction);
  });

  it('should create an action to add item', () => {
    const expectedAction = {
      type: CartActionTypes.ADD_ITEM,
      payload: mockItem
    };
    expect(actions.addItem(mockItem)).toEqual(expectedAction);
  });

  it('should create an action to remove item', () => {
    const expectedAction = {
      type: CartActionTypes.REMOVE_ITEM,
      payload: mockItem
    };
    expect(actions.removeItem(mockItem)).toEqual(expectedAction);
  });

  it('should create an action to clear an item', () => {
    const expectedAction = {
      type: CartActionTypes.CLEAR_ITEM,
      payload: mockItem
    };
    expect(actions.clearItem(mockItem)).toEqual(expectedAction);
  });

  it('should create an action to clear cart', () => {
    const expectedAction = {
      type: CartActionTypes.CLEAR_CART
    };
    expect(actions.clearCart()).toEqual(expectedAction);
  });
});