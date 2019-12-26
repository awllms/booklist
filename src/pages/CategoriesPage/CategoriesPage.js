import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryItems from '../../components/CategoryItems/CategoryItems';
import CategoriesOverview from '../../components/CategoriesOverview/CategoriesOverview';


const CategoriesPage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:categoryTitle`} component={CategoryItems} />
      <Route exact path={`${match.path}`} component={CategoriesOverview} />
    </Switch>
  );
};

export default CategoriesPage;