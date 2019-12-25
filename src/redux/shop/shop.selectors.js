import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopProducts = createSelector(
  [selectShop],
  shop => shop.products
);

export const selectShopCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectShopBestSellers = createSelector(
  [selectShopProducts],
  products => 
    products
      .slice()
      .sort((a, b) => b.timesSold - a.timesSold)
);

export const selectShopNewReleases = createSelector(
  [selectShopProducts],
  products => 
    products
      .filter(product => product.categories.newRelease === true)
);

export const selectShopComingSoon = createSelector(
  [selectShopProducts],
  products => 
    products
      .filter(product => product.categories.comingSoon === true)
);

export const selectProduct = productUrlParam => createSelector(
  [selectShopProducts],
  products => 
    products.filter(product => '/' + product.routeName === productUrlParam)
);

export const selectAllProductCategories = createSelector(
  [selectShopProducts, selectShopCategories],
  (products, categories) => Object.keys(categories).map(keys => {
    return [{ categoryName: categories[keys].name, 
              items: products.filter(product => product.categories[keys] === true)}];
  })
);
 