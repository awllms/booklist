import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleNavHidden } from '../../redux/nav/nav.actions';

import './NavDropDown.scss';

export const NavDropDown = ({ history, currentUser, signOutStart, toggleNavHidden }) => {
  return (
    <div className='nav-dropdown'>
      <ul className='nav-options'>
        <li>
          <span className='nav-option' id='nav-dropdown-shop-link' onClick={() => {
            history.push('/shop')
            toggleNavHidden()
          }}>
            Shop
          </span>
          <div className='nav-border'></div>
        </li>
        {
          currentUser ? 
          <React.Fragment>
            <li>
              <span className='nav-option' id='nav-dropdown-account-link'onClick={() => {
                history.push('/account')
                toggleNavHidden()
              }}>
                Account
              </span>
              <div className='nav-border'></div>
            </li>
            <li>
              <span className='nav-option' id='nav-dropdown-signout-link' onClick={() => {
                signOutStart()
                toggleNavHidden()
              }}>
                SignOut
              </span>
              <div className='nav-border'></div>
            </li>
          </React.Fragment>
          : 
          <li>
            <span className='nav-option' id='nav-dropdown-signin-link' onClick={() => {
              history.push('/signin')
              toggleNavHidden()
            }}>
              SignIn
            </span>
            <div className='nav-border'></div>
          </li>
        }
        <li>
          <span className='nav-option checkout' id='nav-dropdown-checkout-link' onClick={() => {
            history.push('/checkout')
          }}>
            Checkout
          </span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleNavHidden: () => dispatch(toggleNavHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavDropDown));