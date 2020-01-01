import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../CustomButton/CustomButton';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Scr0qKBcKbhdWzEUC1QDuIaU00b3ncU2Cc';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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