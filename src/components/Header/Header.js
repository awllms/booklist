import React from 'react';

import CartIcon from '../CartIcon/CartIcon';

import '../../assets/shopping-cart.png';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>BookList</h1>
      <nav className='navigation'>
        <div className='options'>
          <a href='/' className='option'>Shop</a>
          <a href='/' className='option'>SignIn</a>
          <a href='/' className='option last'>Contact</a>

          <CartIcon />
        </div>
      </nav>
    </header>
  )
};

export default Header;