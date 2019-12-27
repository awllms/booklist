import React from 'react';
import { withRouter } from 'react-router-dom';

import './CartItem.scss';

const CartItem = ({ item, history }) => {
  const { title, imageUrl, price, quantity } = item;
  return (
    <div className='cart-item' onClick={() => history.push(`/${item.routeName}`)}>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{title}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default withRouter(CartItem);