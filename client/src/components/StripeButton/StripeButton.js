import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { setOrderStart } from '../../redux/orders/orders.actions';
import { clearCart } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';

const StripeCheckoutButton = ({ price, cartItems, setOrderStart, currentUser, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Scr0qKBcKbhdWzEUC1QDuIaU00b3ncU2Cc';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      // alert('Payment Successful!');
      setOrderStart({cartItems, currentUser, price});
      clearCart();
      history.push(`/thank-you`, {token})
    }).catch(error => {
      console.log('Payment Error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please use the provided credit card.');
    })
  };

  return (
    <React.Fragment>
    { !currentUser ? (<Redirect to='/signin' />) : 
      <StripeCheckout 
        name='Booklist'
        description={`Your total is $${price}`}
        image='https://i.ibb.co/xjxSt8v/booklist-stripe-button-logo.png'
        label='Pay Now'
        panelLabel='Pay Now'
        amount={priceForStripe}
        currency='USD'
        stripeKey={publishableKey}
        billingAddress
        shippingAddress
        token={onToken}
      >
      <CustomButton>Pay Now</CustomButton>
      </StripeCheckout>
    }
    </React.Fragment>
    
  )
};

const mapDispatchToProps = dispatch => ({
  setOrderStart: userAndItems => dispatch(setOrderStart(userAndItems)),
  clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(withRouter(StripeCheckoutButton));