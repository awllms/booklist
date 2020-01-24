import { addItemToCart, removeItemFromCart } from './cart.utils';

describe('Cart Utility Functions', () => {
  const cartItems = [
    {
      id: 1,
      name: 'Sample Product',
      quantity: 5,
      price: 20
    },
    {
      id: 2,
      name: 'Sample Product 2',
      quantity: 10,
      price: 20
    },
  ];

  const mockCartItem = {
    id: 2,
    name: 'Sample Product 2',
    quantity: 10,
    price: 20
  };

  const mockCartItem2 = {
    id: 3,
    name: 'Sample Product 3',
    price: 20
  };

  const mockCartItem3 = {
    id: 4,
    name: 'Sample Product 3',
    quantity: 1,
    price: 20
  };
  const cartItems2 = [
    mockCartItem3
  ]

  it('should add item to cart', () => {
    expect(addItemToCart(cartItems, mockCartItem)).toEqual(
      [cartItems[0], {...mockCartItem, quantity: 11}]
    )
  });

  it('should add quantity key to item if item is not in cart', () => {
    expect(addItemToCart(cartItems, mockCartItem2)).toEqual(
      [cartItems[0], cartItems[1], {...mockCartItem2, quantity: 1}]
    )
  });

  it('should remove quantity from cart', () => {
    expect(removeItemFromCart(cartItems, mockCartItem)).toEqual(
      [cartItems[0], {...mockCartItem, quantity: 9}]
    )
  });

  it('should remove item completely if from cart if quantity is zero', () => {
    expect(removeItemFromCart(cartItems2, mockCartItem3)).toEqual(
      []
    )
  });
})