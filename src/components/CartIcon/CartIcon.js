import React from 'react';

import '../../assets/shopping-cart.png';
import './CartIcon.scss';

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <div className='shopping-icon'></div>
      <span className='items-count'>99</span>
    </div>
  )
};

export default CartIcon;