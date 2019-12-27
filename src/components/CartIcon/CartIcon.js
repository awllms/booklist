import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import '../../assets/shopping-cart.png';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, cartTotal }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCartHidden()}>
      <div className='shopping-icon'></div>
      { cartTotal === 0 ? null : (<span className='items-count'>{cartTotal}</span>)}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartItemsTotal
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);