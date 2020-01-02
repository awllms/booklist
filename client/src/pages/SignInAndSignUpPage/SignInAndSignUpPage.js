import React from 'react';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => {
  return (
    <React.Fragment>
      <BreadCrumbNav title='SignIn & SignUp' />
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    </React.Fragment>
  );
};

export default SignInAndSignUpPage;