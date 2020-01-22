import React from 'react';

import './Spinner.scss';

export const Spinner = () => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner'></div>
    </div>
  );
};

export default Spinner;