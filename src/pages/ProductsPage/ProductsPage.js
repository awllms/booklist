import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductItem from '../../components/ProductItem/ProductItem';
import ProductsOverview from '../../components/ProductsOverview/ProductsOverview';
import './ProductPage.scss';

const ProductsPage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:productTitle`} component={ProductItem} />
      <Route path={`${match.path}`} component={ProductsOverview} />
    </Switch>
  );
};

export default ProductsPage;