import React, { useState } from 'react';

import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import NavIcon from '../NavIcon/NavIcon';
import NavDropDown from '../NavDropDown/NavDropDown';

import '../../assets/shopping-cart.png';
import './Header.scss';

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(true);
  return (
    <header className='header'>
      <h1>BookList</h1>
      <NavIcon navHidden={navHidden} setNavHidden={setNavHidden} />
      { navHidden ? null : <NavDropDown />}
      <nav className='navigation'>
        <div className='options'>
          <a href='/' className='option'>Shop</a>
          <a href='/' className='option'>SignIn</a>
          <a href='/' className='option last'>Contact</a>

          <CartIcon hidden={hidden} setHidden={setHidden} />
        </div>
        { hidden ? null : <CartDropDown />}
      </nav>
    </header>
  )
};

export default Header;