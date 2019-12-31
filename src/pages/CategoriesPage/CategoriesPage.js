import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryItems from '../../components/CategoryItems/CategoryItems';
import ShopPageContainer from '../ShopPage/ShopPageContainer';


const CategoriesPage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:categoryTitle`} component={CategoryItems} />
      <Route exact path={`${match.path}`} component={ShopPageContainer} />
    </Switch>
  );
};

export default CategoriesPage;