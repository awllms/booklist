import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryItems from '../../components/CategoryItems/CategoryItems';

import { titleCase } from '../../components/CategoryItems/CategoryItems.utils';
import { selectCategoryItems } from '../../redux/shop/shop.selectors';


const CategoriesPage = ({ match, categoryItemsList }) => {
  const categoryItems = categoryItemsList[0];
  const categoryTitle = titleCase(decodeURIComponent(match.params.categoryTitle).replace(/[-]/g, ' '));

  return (
    <Route 
      path={`${match.path}`} 
      render={(props) => <CategoryItems {...props} categoryItems={categoryItems} categoryTitle={categoryTitle} /> } />
  );
}; 

const mapStateToProps = (state, ownProps) => ({
  categoryItemsList: selectCategoryItems(decodeURIComponent(ownProps.match.params.categoryTitle).replace(/[-]/g, ' '))(state)
});

export default connect(mapStateToProps)(CategoriesPage);