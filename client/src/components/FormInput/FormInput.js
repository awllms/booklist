import React from 'react';

import './FormInput.scss';

export const FormInput = ({ ...formInputProps }) => {
  return (
    <div className='form-input-container'>
      <input className='form-input' { ...formInputProps } />
    </div>
  );
};

export default FormInput; 