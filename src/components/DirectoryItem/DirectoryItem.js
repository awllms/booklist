import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';


import './DirectoryItem.scss';

const DirectoryItem = ({ item, history, match }) => {
  const { title, imageUrl, price } = item;
  return (
    <div className='directory-item'>
      <div className='directory-item-image' onClick={() => history.push(`${match.url}${item.routeName}`)}>
        <img className='image' src={ imageUrl } alt='products' />
      </div>
      <div className='directory-meta' onClick={() => history.push(`${match.url}${item.routeName}`)}>
        <h4>{ title }</h4>
        <span>${ price }</span>
      </div>
      <CustomButton>Add To Cart</CustomButton>
    </div>
  );
};

export default withRouter(DirectoryItem);