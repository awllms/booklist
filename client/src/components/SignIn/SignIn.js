import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './SignIn.scss';

export const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const onInputSubmit = (event) => {
    event.preventDefault();
    emailSignInStart(email, password)
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value })
  };

  return (
    <section className='sign-in'>
      <h2>SignIn</h2>
      <h3>Already have an account?</h3>
      <span>Sign in with your email and password.</span>

      <form onSubmit={onInputSubmit}>
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
        <div className='buttons'>
          <CustomButton 
          type='submit'
          isRegularSignIn>Sign In</CustomButton>
          <CustomButton 
          type='button'
          onClick={googleSignInStart}
          isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
      </form>
    </section>
  );
};

export const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);