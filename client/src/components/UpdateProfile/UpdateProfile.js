import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateNameStart, updateEmailStart, updatePasswordStart } from '../../redux/user/user.actions';
import { setAlert } from '../../redux/alert/alert.actions';

import './UpdateProfile.scss';

export const UpdateProfile = ({ currentUser, updateNameStart, updateEmailStart, updatePasswordStart, setAlert }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser.displayName,
    email: currentUser.email,
    emailInputPassword: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [emailPasswordInputHidden, setEmailPasswordInputHidden] = useState(true);

  const { displayName, 
          email, 
          oldPassword,
          newPassword,
          confirmNewPassword,
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
    if (newPassword !== confirmNewPassword) {
      setAlert({
        status: 'failure',
        message: 'New passwords must match.'
      });
      return;
    }
    updatePasswordStart(oldPassword, newPassword);
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
            name='oldPassword'
            type='password'
            value={oldPassword}
            onChange={onInputChange} 
            label='Old Password'
            placeholder='Old Password' 
            required 
          />
          <FormInput 
            name='newPassword'
            type='password'
            value={newPassword}
            onChange={onInputChange} 
            label='New Password'
            placeholder='New Password' 
            required 
          />
          <FormInput 
            name='confirmNewPassword'
            type='password'
            value={confirmNewPassword}
            onChange={onInputChange} 
            label='Confirm New Password'
            placeholder='Confirm New Password' 
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

export const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNameStart: displayName => dispatch(updateNameStart(displayName, ownProps)),
  updateEmailStart: (email, password) => dispatch(updateEmailStart(email, password, ownProps)),
  updatePasswordStart: (oldPassword, newPassword) => dispatch(updatePasswordStart(oldPassword, newPassword, ownProps)),
  setAlert: alert => dispatch(setAlert(alert))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProfile));