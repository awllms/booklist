import React from 'react';


import './FormInput.scss';

const FormInput = ({ ...formInputProps }) => {
  return (
    <div className='form-input-container'>
      <input className='form-input' { ...formInputProps }/>
    </div>
  );
};

export default FormInput; 