import * as ordersSelectors from './orders.selectors';

describe('Orders Selectors', () => {
  const mockState = {
    orders: {
      orderItems: [
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
      ],
      isOrdersFetching: false,
      isOrderLoading: false
    }
  };

  it('should select orderItems off of state', () => {
    expect(ordersSelectors.selectOrderItems(mockState)).toEqual(mockState.orders.orderItems);
  });

  it('should select isOrdersFetching off of state', () => {
    expect(ordersSelectors.selectIsOrdersFetching(mockState)).toEqual(mockState.orders.isOrdersFetching);
  });

  it('should select isOrderLoading off of state', () => {
    expect(ordersSelectors.selectIsOrderLoading(mockState)).toEqual(mockState.orders.isOrderLoading);
  });

  // it('should accumulate and select cartItems quantity total', () => {
  //   expect(cartSelectors.selectCartItemsTotal(mockState)).toEqual(15);
  // });

  // it('should accumulate and select checkout total amount', () => {
  //   expect(cartSelectors.selectCheckoutTotal(mockState)).toEqual(300);
  // });
});

