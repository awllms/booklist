import React from 'react';
import { withRouter } from 'react-router-dom';
// import CartIcon from '../CartIcon/CartIcon';

import './NavDropDown.scss';

const NavDropDown = ({ history }) => {
  return (
    <div className='nav-dropdown'>
      <ul className='nav-options'>
        <li>
          <span className='nav-option' onClick={() => {history.push('/shop') }}>
            Shop
          </span>
          <div className='nav-border'></div>
        </li>
        <li>
          <span className='nav-option' onClick={() => {history.push('/signin') }}>
            SignIn
          </span>
          <div className='nav-border'></div>
        </li>
        <li>
          <span className='nav-option checkout' onClick={() => {history.push('/checkout') }}>
            Checkout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(NavDropDown);