import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => shop.products
);

export const selectShopBestSellers = createSelector(
  [selectShopProducts],
  products => 
    products
      .slice()
      .sort((a, b) => b.timesSold - a.timesSold)
      .filter((product, index) => index < 6)
);

export const selectShopNewReleases = createSelector(
  [selectShopProducts],
  products => 
    products
      .filter(product => product.categories.newRelease === true)
      .filter((product, index) => index < 6)
);

export const selectShopComingSoon = createSelector(
  [selectShopProducts],
  products => 
    products
      .filter(product => product.categories.comingSoon === true)
      .filter((product, index) => index < 6)
);

export const selectProduct = productUrlParam => createSelector(
  [selectShopProducts],
  products => 
    products.filter(product => '/' + product.routeName === productUrlParam)
);
 