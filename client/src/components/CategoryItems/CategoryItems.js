import React from 'react';
import { connect } from 'react-redux';

import BreadCrumbNav from '../BreadCrumbNav/BreadCrumbNav';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

import { titleCase } from './CategoryItems.utils';
import { selectCategoryItems } from '../../redux/shop/shop.selectors';

import './CategoryItems.scss'; 

const CategoryItems = ({ match, categoryItemsList }) => {
  const categoryItems = categoryItemsList[0];
  const categoryTitle = titleCase(decodeURIComponent(match.params.categoryTitle).replace(/[-]/g, ' '));

  return (
    <React.Fragment>
      <BreadCrumbNav title={categoryTitle} />
      <section className='category-items-container'>
        <h2>{ categoryTitle }</h2>
        <div className='category-items'>
          {categoryItems ? 
            categoryItems.map(item => <DirectoryItem key={item.id} item={item} />)
            : null }
        </div>
      </section>
    </React.Fragment>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categoryItemsList: selectCategoryItems(decodeURIComponent(ownProps.match.params.categoryTitle).replace(/[-]/g, ' '))(state)
});

export default connect(mapStateToProps)(CategoryItems);