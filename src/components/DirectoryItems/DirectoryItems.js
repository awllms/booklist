import React from 'react';

import './DirectoryItems.scss';


const DirectoryItems = ({ title }) => {
  return (
    <div className='directory-items-container'>
      <h3>{ title }</h3>
      <div className='directory-items'>
        <div className='directory-item'>
          <div className='directory-item-image'></div>
          <h4>Unfu*k Yourself</h4>
          <span>$10</span>
        </div>

        <div className='directory-item'>
          <div className='directory-item-image'></div>
          <h4>Talking to Strangers</h4>
          <span>$10</span>
        </div>

        <div className='directory-item'>
          <div className='directory-item-image'></div>
          <h4>Outliers</h4>
          <span>$10</span>
        </div>

        <div className='directory-item'>
          <div className='directory-item-image'></div>
          <h4>Black Swan</h4>
          <span>$10</span>
        </div>

      </div>
    </div>
  )
};

export default DirectoryItems;