import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, isRegularSignIn, ...otherProps }) => {
  return (
    <button 
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}${isRegularSignIn ? 'regular-sign-in' : ''}`} 
    {...otherProps}>{ children }</button>
  );
};

export default CustomButton;