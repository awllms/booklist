import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleNavHidden } from '../../redux/nav/nav.actions';
import './NavDropDown.scss';

const NavDropDown = ({ history, currentUser, signOutStart, toggleNavHidden }) => {
  return (
    <div className='nav-dropdown'>
      <ul className='nav-options'>
        <li>
          <span className='nav-option' onClick={() => {
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
              <span className='nav-option' onClick={() => {
                history.push('/account')
                toggleNavHidden()
              }}>
                Account
              </span>
              <div className='nav-border'></div>
            </li>
            <li>
              <span className='nav-option' onClick={() => {
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
            <span className='nav-option' onClick={() => {
              history.push('/signin')
              toggleNavHidden()
            }}>
              SignIn
            </span>
            <div className='nav-border'></div>
          </li>
        }
        <li>
          <span className='nav-option checkout' onClick={() => {
            history.push('/checkout')
            toggleNavHidden()
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleNavHidden: () => dispatch(toggleNavHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavDropDown));