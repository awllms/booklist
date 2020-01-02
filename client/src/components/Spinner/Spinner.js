import React from 'react';

import './Spinner.scss';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='spinner-overlay'>
      <div className='spinner'></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  )
};

export default Spinner;