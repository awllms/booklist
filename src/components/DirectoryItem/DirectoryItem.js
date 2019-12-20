import React from 'react';


import './DirectoryItem.scss';

const DirectoryItem = ({ photo, name, price }) => {
  return (
    <div className='directory-item'>
      <div className='directory-item-image'>
        <img src={ photo } alt='products' />
      </div>
      <h4>{ name }</h4>
      <span>{ price }</span>
    </div>
  );
};

export default DirectoryItem;