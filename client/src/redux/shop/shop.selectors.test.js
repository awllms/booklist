import * as shopSelectors from './shop.selectors';

describe('Shop Selectors', () => {
  const mockState = {
    shop: {
      products: [
        {
          id: 1,
          name: 'Sample Product',
          quantity: 5,
          price: 20,
          routeName: 'products/sample-product',
          author: 'Sample Author',
          narrator: 'Sample Narrator',
          publisher: 'Sample Publisher',
          categories: {
            bestSeller: true,
            newRelease: true,
            comingSoon: false
          },
          timesSold: 1
        },
        {
          id: 2,
          name: 'Sample Product 2',
          quantity: 10,
          price: 20,
          routeName: 'products/sample-product-2',
          author: 'Sample Author 2',
          narrator: 'Sample Narrator 2',
          publisher: 'Sample Publisher 2',
          categories: {
            bestSeller: false,
            newRelease: false,
            comingSoon: true
          },
          timesSold: 5
        }
      ],
      categories: {
        bestSeller: {
          name: 'Best Sellers'
        },
        newRelease: {
          name: 'New Releases',
        }
    },
      isProductsFetching: false,
      isCategoriesFetching: false
    }
  };

  const mockState2 = {
    shop: {
      products: null,
      categories: null,
      isProductsFetching: false,
      isCategoriesFetching: false
    }
  };

  it('should select products off of state', () => {
    expect(shopSelectors.selectShopProducts(mockState)).toEqual(mockState.shop.products);
  });

  it('should select categories off of state', () => {
    expect(shopSelectors.selectShopCategories(mockState)).toEqual(mockState.shop.categories);
  });

  it('should select isProductsFetching off of state', () => {
    expect(shopSelectors.selectIsProductFetching(mockState)).toEqual(mockState.shop.isProductsFetching);
  });

  it('should select product state and return if the value is truthy', () => {
    expect(shopSelectors.selectIsProductLoaded(mockState)).toEqual(true);
  });

  it('should select product state and return if the value is falsy', () => {
    expect(shopSelectors.selectIsProductLoaded(mockState2)).toEqual(false);
  });

  it('should select products off state and order them by time sold', () => {
    expect(shopSelectors.selectShopBestSellersFromTimesSold(mockState)).toEqual(
      [mockState.shop.products[1], mockState.shop.products[0]]
    );
  });

  it('should select products that are best sellers', () => {
    expect(shopSelectors.selectShopBestSellers(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty best sellers array if products do not exists', () => {
    expect(shopSelectors.selectShopBestSellers(mockState2)).toEqual(
      []
    );
  });

  it('should select products that are new releases', () => {
    expect(shopSelectors.selectShopNewReleases(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty new releases array if products do not exists', () => {
    expect(shopSelectors.selectShopNewReleases(mockState2)).toEqual(
      []
    );
  });

  it('should select products that are coming soon', () => {
    expect(shopSelectors.selectShopComingSoon(mockState)).toEqual(
      [mockState.shop.products[1]]
    );
  });

  it('should return empty coming soon array if products do not exists', () => {
    expect(shopSelectors.selectShopComingSoon(mockState2)).toEqual(
      []
    );
  });

  it('should select product that matches url param', () => {
    expect(shopSelectors.selectProduct('/products/sample-product')(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty product array if products do not exists', () => {
    expect(shopSelectors.selectProduct('does not exist')(mockState2)).toEqual(
      []
    );
  });

  it('should select All product categories', () => {
    expect(shopSelectors.selectAllProductCategories(mockState)).toEqual(
      [
        {
          categoryName: mockState.shop.categories['bestSeller'].name,
          items: [mockState.shop.products[0]]
        },
        {
          categoryName: mockState.shop.categories['newRelease'].name,
          items: [mockState.shop.products[0]]
        }
      ]
    );
  });

  it('should return empty array select if products and categories do not exists', () => {
    expect(shopSelectors.selectAllProductCategories(mockState2)).toEqual(
      []
    );
  });

  it('should select categoryItems that matches url param', () => {
    expect(shopSelectors.selectCategoryItems('best sellers')(mockState)).toEqual(
      [[mockState.shop.products[0]]]
    );
  });

  it('should return empty array if products and categories do not exists', () => {
    expect(shopSelectors.selectCategoryItems('does not exist')(mockState2)).toEqual(
      []
    );
  });

  it('should select author that matches url param', () => {
    expect(shopSelectors.selectAuthorItems('sample author')(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty array if author does not exists', () => {
    expect(shopSelectors.selectAuthorItems('does not exist')(mockState)).toEqual(
      []
    );
  });

  it('should select narrator that matches url param', () => {
    expect(shopSelectors.selectAuthorItems('sample narrator')(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty array if narrator does not exists', () => {
    expect(shopSelectors.selectAuthorItems('does not exist')(mockState)).toEqual(
      []
    );
  });

  it('should select publisher that matches url param', () => {
    expect(shopSelectors.selectAuthorItems('sample publisher')(mockState)).toEqual(
      [mockState.shop.products[0]]
    );
  });

  it('should return empty array if publisher does not exists', () => {
    expect(shopSelectors.selectAuthorItems('does not exist')(mockState)).toEqual(
      []
    );
  });

  it('should return empty array if products do not exists', () => {
    expect(shopSelectors.selectAuthorItems('sample author')(mockState2)).toEqual(
      []
    );
  });
});

