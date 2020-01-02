import React from 'react';
import { withRouter } from 'react-router-dom';

import './BreadCrumbNav.scss';

const BreadCrumbNav = ({ history, title }) => {
  return (
    <div className='breadcrumb-nav'>
      <h4 onClick={() => history.push('/')}>Home /</h4>
      <span className='current-page'>{title}</span>
    </div>
  );
};

export default withRouter(BreadCrumbNav);