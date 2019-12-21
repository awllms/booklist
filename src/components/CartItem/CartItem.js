import React from 'react';

import photo from '../../assets/product.jpg';
import './CartItem.scss';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <img src={photo} alt='item' />
      <div className='item-details'>
        <span className='name'>UnFu*k Yourself</span>
        <span className='price'>1 x $10</span>
      </div>
    </div>
  );
};

export default CartItem;