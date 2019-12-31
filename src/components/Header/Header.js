import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import NavIcon from '../NavIcon/NavIcon';
import NavDropDown from '../NavDropDown/NavDropDown';

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import '../../assets/shopping-cart.png';
import './Header.scss';

const Header = ({ history, hidden, currentUser, signOutStart }) => {
  const [navHidden, setNavHidden] = useState(true);
  return (
    <header className='header'>
      <h1 onClick={() => history.push('/')}>BookList</h1>
      <NavIcon navHidden={navHidden} setNavHidden={setNavHidden} />
      { navHidden ? null : <NavDropDown />}
      <nav className='navigation'>
        <div className='options'>
          <Link className='option' to='/shop'>Shop</Link>
          {
            currentUser ? 
            <div className='option' onClick={signOutStart}>SignOut</div>
            : 
            <Link className='option' to='/signin'>SignIn</Link>
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));