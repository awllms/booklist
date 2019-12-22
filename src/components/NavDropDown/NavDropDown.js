import React from 'react';

import CartIcon from '../CartIcon/CartIcon';

import './NavDropDown.scss';

const NavDropDown = () => {
  return (
    <div className='nav-dropdown'>
      <ul className='nav-options'>
        <li><a href='/' className='nav-option'>Shop</a><div className='nav-border'></div></li>
        <li><a href='/' className='nav-option'>SignIn</a><div className='nav-border'></div></li>
        <li><a href='/' className='nav-option'>Contact</a><div className='nav-border'></div></li>
        <li><a href='/' className='nav-option'><CartIcon /></a></li>
      </ul>
    </div>
  );
};

export default NavDropDown;