import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setOrderStart, setOrderIsLoading } from '../../redux/orders/orders.actions';
import { setAlert } from '../../redux/alert/alert.actions';
import { clearCart } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';

export const StripeCheckoutButton = ({ price, cartItems, setOrderStart, currentUser, history, clearCart, setOrderIsLoading, setAlert }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Scr0qKBcKbhdWzEUC1QDuIaU00b3ncU2Cc';

  const onToken = token => {
    setOrderIsLoading()
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      setOrderStart({cartItems, currentUser, price});
      clearCart();
      history.push(`/thank-you`, {token})
    }).catch(error => {
      // console.log('Payment Error: ', JSON.parse(error));
      console.log('Payment Error: ', error);
      setAlert({ 
        status: 'failure',
        message: 'There was an issue with your payment. Please use the provided credit card.'
      });
    })
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
    
  )
};

export const mapDispatchToProps = dispatch => ({
  setOrderStart: userAndItems => dispatch(setOrderStart(userAndItems)),
  clearCart: () => dispatch(clearCart()),
  setOrderIsLoading: () => dispatch(setOrderIsLoading()),
  setAlert: alert => dispatch(setAlert(alert))
});

export default connect(null, mapDispatchToProps)(withRouter(StripeCheckoutButton));