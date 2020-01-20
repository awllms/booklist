import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateNameStart, updateEmailStart } from '../../redux/user/user.actions';
import { setAlert } from '../../redux/alert/alert.actions';

import './UpdateProfile.scss';

const UpdateProfile = ({ currentUser, updateNameStart, updateEmailStart, setAlert }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser.displayName,
    email: currentUser.email,
    emailInputPassword: '',
    password: '',
    confirmPassword: ''
  });

  const [emailPasswordInputHidden, setEmailPasswordInputHidden] = useState(true);

  const { displayName, 
          email, 
          password, 
          confirmPassword, 
          emailInputPassword } = userCredentials;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value })
  };

  const onEmailInputClick = () => {
    setEmailPasswordInputHidden(false);
  };

  const onEmailButtonClick = () => {
    setEmailPasswordInputHidden(false)
    if (!emailInputPassword) {
      setAlert({
        status: 'regular',
        message: 'Please enter your password.'
      });
      return;
    }
  };

  const onNameSubmit = (event) => {
    event.preventDefault();
    updateNameStart(displayName);
  };

  const onEmailSubmit = (event) => {
    event.preventDefault();
    if (!emailInputPassword) {
      setAlert({
        status: 'failure',
        message: 'Please enter your password.'
      });
      return;
    }
    updateEmailStart(email, emailInputPassword);
  };

  const onPasswordSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <section className='update-profile'>
        <div className='name-email'>
        <form onSubmit={onNameSubmit}>
          <FormInput 
            name='displayName'
            type='name'
            value={displayName}
            onChange={onInputChange} 
            label='Name'
            placeholder='Name' 
            required 
          />
          <CustomButton>Update Name</CustomButton>
        </form>
        <form onSubmit={onEmailSubmit}>
          <FormInput 
            name='email'
            type='email'
            value={email}
            onChange={onInputChange}
            onClick={onEmailInputClick} 
            label='Email'
            placeholder='Email' 
            required 
          />

          { !emailPasswordInputHidden ? 
            <FormInput 
              name='emailInputPassword'
              type='password'
              value={emailInputPassword}
              onChange={onInputChange} 
              label='Password'
              placeholder='Enter Password' 
              required 
            />
            : null
          }
          <CustomButton onClick={onEmailButtonClick}>Update Email</CustomButton>
        </form>
        </div>
        <form className='update-password' onSubmit={onPasswordSubmit}>
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
            name='confirm-password'
            type='password'
            value={confirmPassword}
            onChange={onInputChange} 
            label='Confirm Password'
            placeholder='Confirm Password' 
            required 
          />
          <CustomButton>Update Password</CustomButton>
        </form>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNameStart: displayName => dispatch(updateNameStart(displayName, ownProps)),
  updateEmailStart: (email, password) => dispatch(updateEmailStart(email, password, ownProps)),
  setAlert: alert => dispatch(setAlert(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProfile));