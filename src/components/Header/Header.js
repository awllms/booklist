import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import NavIcon from '../NavIcon/NavIcon';
import NavDropDown from '../NavDropDown/NavDropDown';

import '../../assets/shopping-cart.png';
import './Header.scss';

const Header = ({ history }) => {
  const [hidden, setHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(true);
  return (
    <header className='header'>
      <h1 onClick={() => history.push('/')}>BookList</h1>
      <NavIcon navHidden={navHidden} setNavHidden={setNavHidden} />
      { navHidden ? null : <NavDropDown />}
      <nav className='navigation'>
        <div className='options'>
          <Link className='option' to='/shop'>
            Shop
          </Link>
          <a href='/' className='option'>SignIn</a>
          <a href='/' className='option last'>Contact</a>

          <CartIcon hidden={hidden} setHidden={setHidden} />
        </div>
        { hidden ? null : <CartDropDown />}
      </nav>
    </header>
  )
};

export default withRouter(Header);