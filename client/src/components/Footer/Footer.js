import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-top'>
          <h1>BookList</h1>
          <div className='footer-nav'>
            <ul className='footer-list'>
              <li className='first'>About</li>
              <li>Careers</li>
              <li>Conditions of Use</li>
              <li>Privacy Notice</li>
              <li className='last'>Contact</li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <span className='footer-bottom-text'>&copy; Copyright 1997-2019 BookList, Inc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;