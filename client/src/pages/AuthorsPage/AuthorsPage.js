import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryItems from '../../components/CategoryItems/CategoryItems';

import { titleCase } from '../../components/CategoryItems/CategoryItems.utils';
import { selectAuthorItems } from '../../redux/shop/shop.selectors';

const AuthorsPage = ({ match, authorItems }) => {
  const authorName = titleCase(decodeURIComponent(match.params.authorName).replace(/[-]/g, ' '));
  
  return (
    <Route 
      path={`${match.path}`} 
      render={(props) => <CategoryItems {...props} categoryItems={authorItems} categoryTitle={authorName} /> } />
  )
};

const mapStateToProps = (state, ownProps) => ({
  authorItems: selectAuthorItems(decodeURIComponent(ownProps.match.params.authorName).replace(/[-]/g, ' '))(state)
});

export default connect(mapStateToProps)(AuthorsPage);