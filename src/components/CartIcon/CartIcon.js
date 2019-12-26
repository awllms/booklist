import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import '../../assets/shopping-cart.png';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCartHidden()}>
      <div className='shopping-icon'></div>
      <span className='items-count'>99</span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);