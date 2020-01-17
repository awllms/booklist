import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden, addItem, removeItem } from '../../redux/cart/cart.actions';

import './CartItem.scss';

const CartItem = ({ item, history, toggleCartHidden, addItem, removeItem }) => {
  const { title, imageUrl, price, quantity } = item;

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' onClick={() => {
        history.push(`/${item.routeName}`)
        toggleCartHidden()
      }}/>
      <div className='item-details'>
        <span className='name' onClick={() => {
          history.push(`/${item.routeName}`)
          toggleCartHidden()
        }}>{title}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
        <span className='value'>{quantity} x ${price}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(CartItem));

