import React from 'react';

import './NavIcon.scss';

export const NavIcon = ({ toggleNavHidden }) => {
  return (
    <div className='nav-icon' onClick={() => toggleNavHidden()}></div>
  );
};

export default NavIcon; 