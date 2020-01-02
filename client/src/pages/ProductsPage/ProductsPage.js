import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductItem from '../../components/ProductItem/ProductItem';
import ShopPageContainer from '../ShopPage/ShopPageContainer';

import './ProductPage.scss';


const ProductsPage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:productTitle`} component={ProductItem} />
      <Route path={`${match.path}`} component={ShopPageContainer} />
    </Switch>
  );
};

export default ProductsPage;