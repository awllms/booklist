import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import NavIcon from '../NavIcon/NavIcon';
import NavDropDown from '../NavDropDown/NavDropDown';

import '../../assets/shopping-cart.png';
import './Header.scss';

const Header = ({ history, hidden }) => {
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

          <CartIcon /> 
        </div>
        { hidden ? null : <CartDropDown />}
      </nav>
    </header>
  )
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(withRouter(Header));