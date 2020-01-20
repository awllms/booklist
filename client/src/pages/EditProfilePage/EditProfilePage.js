import React from 'react';
import { withRouter } from 'react-router-dom';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';

import './EditProfilePage.scss';

const EditProfilePage = ({ history }) => {
  return(
    <React.Fragment>
      <BreadCrumbNav title='Edit Profile'/>
      <div className='edit-profile'>
        <h2>Edit Profile</h2>
        <span 
          className='back-span' 
          onClick={() => history.push('/account')}>Back to Account</span>
        <UpdateProfile />
      </div>
    </React.Fragment>
  );
}

export default withRouter(EditProfilePage);