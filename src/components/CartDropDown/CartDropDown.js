import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropDown.scss';

const CartDropDown = ({ cartItems, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : 
        (<span className='cart-message'>It's looking a bit empty here...</span>)
      }

      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
      }}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(withRouter(CartDropDown));