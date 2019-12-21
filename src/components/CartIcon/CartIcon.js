import React from 'react';

import '../../assets/shopping-cart.png';
import './CartIcon.scss';

const CartIcon = ({ hidden, setHidden }) => {
  return (
    <div className='cart-icon' onClick={() => setHidden(!hidden)}>
      <div className='shopping-icon'></div>
      <span className='items-count'>99</span>
    </div>
  )
};

export default CartIcon;