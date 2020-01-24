import * as cartSelectors from './cart.selectors';

describe('Cart Selectors', () => {
  const mockState = {
    cart: {
      hidden: true,
      cartItems: [
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
        }
      ]
    }
  };

  it('should select hidden off of state', () => {
    expect(cartSelectors.selectCartHidden(mockState)).toEqual(mockState.cart.hidden);
  });

  it('should accumulate and select cartItems quantity total', () => {
    expect(cartSelectors.selectCartItemsTotal(mockState)).toEqual(15);
  });

  it('should accumulate and select checkout total amount', () => {
    expect(cartSelectors.selectCheckoutTotal(mockState)).toEqual(300);
  });
});
