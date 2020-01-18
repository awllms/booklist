import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductItem from '../../components/ProductItem/ProductItem';
import Spinner from '../../components/Spinner/Spinner';

import './ProductPage.scss';

const ShopPageContainer = lazy(() => import('../ShopPage/ShopPageContainer'));

const ProductsPage = ({ match }) => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route path={`${match.path}/:productTitle`} component={ProductItem} />
        <Route exact path={`${match.path}`} component={ShopPageContainer} />
      </Suspense>
    </Switch>
  );
};

export default ProductsPage;