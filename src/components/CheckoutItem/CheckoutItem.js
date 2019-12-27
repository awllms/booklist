import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
  const { imageUrl, title, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='book' />
      </div>
      <span className='title'>{title}</span>
      <span className='quantity'>
        <div className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove'>&#10005;</div>
    </div>
  );
};


export default CheckoutItem;