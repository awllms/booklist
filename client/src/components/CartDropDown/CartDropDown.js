import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './CartDropDown.scss';

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : 
        (<span className='cart-message' onClick={toggleCartHidden}>It's looking a bit empty here...</span>)
      }

      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        toggleCartHidden()
      }}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartDropDown));