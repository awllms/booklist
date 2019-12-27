import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductItem from '../../components/ProductItem/ProductItem';
import CategoriesOverview from '../../components/CategoriesOverview/CategoriesOverview';
import './ProductPage.scss';

const ProductsPage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:productTitle`} component={ProductItem} />
      <Route path={`${match.path}`} component={CategoriesOverview} />
    </Switch>
  );
};

export default ProductsPage;