import React from 'react';

import BreadCrumbNav from '../BreadCrumbNav/BreadCrumbNav';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './CategoryItems.scss'; 

export const CategoryItems = ({ categoryItems, categoryTitle }) => {

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

export default CategoryItems;