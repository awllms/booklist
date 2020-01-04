import React from 'react';
import { withRouter } from 'react-router-dom';

import './OrderItem.scss';

const OrderItem = ({ item, history }) => {
  const { routeName, imageUrl, title, quantity, price } = item;

  return (
    <div className='order-item'> 
      <div className='image-container' onClick={() => history.push(`/${routeName}`)}>
        <img src={imageUrl} alt='book' /> 
      </div>
      <span className='title' onClick={() => history.push(`/${routeName}`)}>{title}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>
    </div>
  )
};

export default withRouter(OrderItem);