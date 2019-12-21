import React from 'react';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CartItem />
        <CartItem />
        <CartItem />
        {/* <span className='cart-message'>It's looking a bit empty here...</span> */}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;