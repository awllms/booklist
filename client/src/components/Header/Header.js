import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import NavIcon from '../NavIcon/NavIcon';
import NavDropDown from '../NavDropDown/NavDropDown';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectNavHidden } from '../../redux/nav/nav.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleNavHidden } from '../../redux/nav/nav.actions';

import '../../assets/shopping-cart.png';
import './Header.scss';

export const Header = ({ history, hidden, navHidden, currentUser, signOutStart, toggleNavHidden }) => {
  
  return (
    <header className='header'>
        <h1 onClick={() => history.push('/')}>BookList</h1>
        <NavIcon toggleNavHidden={toggleNavHidden} />
      { navHidden ? null : <NavDropDown />}
      <nav className='navigation'>
        <div className='options'>
          <Link className='option' to='/shop'>Shop</Link>
          {
            currentUser ? 
            <React.Fragment>
            <Link className='option' id='header-account-link' to='/account'>Account</Link>
            <div className='option' id='header-signout-link' onClick={signOutStart}>SignOut</div>
            </React.Fragment>
            : 
            <Link className='option' id='header-signin-link' to='/signin'>SignIn</Link>
          }

          <CartIcon /> 
        </div>
        { hidden ? null : <CartDropDown />}
      </nav>
    </header>
  )
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
  navHidden: selectNavHidden
});

export const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleNavHidden: () => dispatch(toggleNavHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));