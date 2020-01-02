import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import CustomButton from '../CustomButton/CustomButton';

const StripeCheckoutButton = ({ price }) => {
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
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment Error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please use the provided credit card.');
    })
  };

  return (
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
  )
};

export default StripeCheckoutButton;