import React from 'react';


import './DirectoryItem.scss';

const DirectoryItem = ({ photo, name, price }) => {
  return (
    <div className='directory-item'>
      <div className='directory-item-image'>
        <img className='image' src={ photo } alt='products' />
      </div>
      <h4>{ name }</h4>
      <span>{ price }</span>
      <button className='custom-button'>Add To Cart</button>
    </div>
  );
};

export default DirectoryItem;