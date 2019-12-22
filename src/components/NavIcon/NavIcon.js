import React from 'react';

import './NavIcon.scss';

const NavIcon = ({ navHidden, setNavHidden }) => {
  return (
    <div className='nav-icon' onClick={() => setNavHidden(!navHidden)}></div>
  );
};

export default NavIcon; 