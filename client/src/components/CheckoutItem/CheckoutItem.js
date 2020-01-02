import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './CheckoutItem.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItem, history }) => {
  const { imageUrl, title, quantity, price, routeName } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container' onClick={() => history.push(`/${routeName}`)}>
        <img src={imageUrl} alt='book' />
      </div>
      <span className='title' onClick={() => history.push(`/${routeName}`)}>{title}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove' onClick={() => clearItem(item)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(CheckoutItem));