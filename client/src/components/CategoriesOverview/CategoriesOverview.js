import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllProductCategories } from '../../redux/shop/shop.selectors';

import DirectoryItems from '../DirectoryItems/DirectoryItems';

import './CategoriesOverview.scss';

export const CategoryOverview = ({ categories }) => {
  return (
    <section className='category-overview'>
      {
        categories.map((category, index) => 
        <DirectoryItems key={index} 
                        title={category.categoryName} 
                        items={category.items}  />)
      }
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectAllProductCategories
});

export default connect(mapStateToProps)(CategoryOverview);