import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import OrderItems from '../../components/OrderItems/OrderItems';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import './AccountPage.scss';

const AccountPage = ({ currentUser, fetchOrdersStart }) => {
  
  useEffect(() => {
    fetchOrdersStart(currentUser.id);
  }, [fetchOrdersStart, currentUser])
  
  return (
    <React.Fragment>
      <BreadCrumbNav title='Account' /> 
      <section className='account-page'>
        <h2>Account</h2>
        <h3>{`Hello, ${currentUser.displayName}!`}</h3>
        <span>Edit Profile</span>
        <div className='orders-overview'>
          <h3>Orders</h3>
          <OrderItems />
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersStart: currentUserId => dispatch(fetchOrdersStart(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);