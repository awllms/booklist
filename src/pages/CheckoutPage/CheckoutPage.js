import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCheckoutTotal } from '../../redux/cart/cart.selectors';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <React.Fragment>
      <BreadCrumbNav title='Checkout'/>
      <section className='checkout-page-container'>
        <h2>Checkout</h2>
        <div className='checkout-page'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Title</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          { cartItems.length ? 
              cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
              : (<div className='checkout-message'><span>Your cart is empty.</span></div>)
          }
          <div className='total'>
            <span className='total-bold'>Total: <span>${total}</span></span>
          </div>
          <div className='test-warning'>
            <span>This app was created for testing/proof of concept purposes.</span>
            <span>*Please ONLY use the following test credit card for payments*</span>
            <span>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</span>
          </div>
          <div className='checkout-button'>
            <StripeCheckoutButton price={total} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCheckoutTotal
});

export default connect(mapStateToProps)(CheckoutPage);