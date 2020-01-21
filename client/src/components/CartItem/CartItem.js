import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem, removeItem } from '../../redux/cart/cart.actions';

import './CartItem.scss';

export const CartItem = ({ item, history, addItem, removeItem }) => {
  const { title, imageUrl, price, quantity } = item;

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' onClick={() => {
        history.push(`/${item.routeName}`)
      }}/>
      <div className='item-details'>
        <span className='name' onClick={() => {
          history.push(`/${item.routeName}`)
        }}>{title}</span>
        <span className='quantity'>
        <div className='arrow' id='removeItemArrow' onClick={() => removeItem(item)}>&#10094;</div>
        <span className='value'>{quantity} x ${price}</span>
        <div className='arrow' id='addItemArrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      </div>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(CartItem));

