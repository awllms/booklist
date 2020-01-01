import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './CartItem.scss';

const CartItem = ({ item, history, toggleCartHidden }) => {
  const { title, imageUrl, price, quantity } = item;
  return (
    <div className='cart-item' onClick={() => {
      history.push(`/${item.routeName}`)
      toggleCartHidden()
    }}>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{title}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(withRouter(CartItem));