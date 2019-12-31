import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../redux/user/user.actions';

import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
  
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const { displayName, email, password, confirmPassword } = userCredentials;
  
  const onInputSubmit = (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // console.log({ email, password, displayName })
    signUpStart({ email, password, displayName });
  };
  
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value })
  };

  return (
    <section className='sign-up'>
      <h2>SignUp</h2>
      <h3>I do not have an account.</h3>
      <span>Sign up with your email and password</span>
      <form onSubmit={onInputSubmit}>
      <FormInput 
          name='displayName'
          type='text'
          value={displayName}
          onChange={onInputChange} 
          label='Name'
          placeholder='Name' 
          required 
        />
      <FormInput 
          name='email'
          type='email'
          value={email}
          onChange={onInputChange} 
          label='Email'
          placeholder='Email' 
          required 
        />
        <FormInput 
          name='password'
          type='password'
          value={password}
          onChange={onInputChange} 
          label='Password'
          placeholder='Password' 
          required 
        />
        <FormInput 
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={onInputChange} 
          label='Confirm Password'
          placeholder='Confirm Password' 
          required 
        />
        <CustomButton 
        type='submit'
        isRegularSignIn>Sign Up</CustomButton>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);