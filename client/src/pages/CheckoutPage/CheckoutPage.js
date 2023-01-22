import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectCartItems,
  selectCheckoutTotal
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setAlert } from '../../redux/alert/alert.actions';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CustomButton from '../../components/CustomButton/CustomButton';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './CheckoutPage.scss';

export const CheckoutPage = ({
  cartItems,
  total,
  currentUser,
  setAlert,
  history
}) => {
  return (
    <React.Fragment>
      <BreadCrumbNav title="Checkout" />
      <section className="checkout-page-container">
        <h2>Checkout</h2>
        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Title</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.length ? (
            cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
          ) : (
            <div className="checkout-message">
              <span>Your cart is empty.</span>
            </div>
          )}
          <div className="total">
            <span className="total-bold">
              Total: <span>${total}</span>
            </span>
          </div>
          <div className="test-warning">
            <span>
              This app was created for testing/proof of concept purposes.
            </span>
            <span>
              *Please ONLY use the following test credit card for payments*
            </span>
            <span>4242 4242 4242 4242 - Exp: 01/34 - CVV: 123</span>
          </div>
          <div className="checkout-button">
            {cartItems.length ? (
              currentUser ? (
                <StripeCheckoutButton
                  price={total}
                  cartItems={cartItems}
                  currentUser={currentUser}
                />
              ) : (
                <CustomButton
                  onClick={() => {
                    setAlert({
                      status: 'regular',
                      message: 'Please sign in to complete checkout.'
                    });
                    history.push('/signin');
                  }}
                >
                  Pay Now
                </CustomButton>
              )
            ) : (
              <CustomButton
                onClick={() => {
                  setAlert({
                    status: 'failure',
                    message:
                      'Your cart is empty. Please add an item to complete checkout process.'
                  });
                }}
              >
                Pay Now
              </CustomButton>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCheckoutTotal,
  currentUser: selectCurrentUser
});

export const mapDispatchToProps = dispatch => ({
  setAlert: alert => dispatch(setAlert(alert))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CheckoutPage));
