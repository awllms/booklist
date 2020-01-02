import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllProductCategories } from '../../redux/shop/shop.selectors';

import DirectoryItems from '../DirectoryItems/DirectoryItems';

import './CategoriesOverview.scss';

const CategoryOverview = ({ categories }) => {
  return (
    <section className='category-overview'>
      {
        categories.map((category, index) => 
        <DirectoryItems key={index} 
                        title={category[0].categoryName} 
                        items={category[0].items}  />)
      }
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectAllProductCategories
});

export default connect(mapStateToProps)(CategoryOverview);