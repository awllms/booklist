import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BreadCrumbNav from '../../components/BreadCrumbNav/BreadCrumbNav';
import OrderItems from '../../components/OrderItems/OrderItems';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectOrderItems } from '../../redux/orders/order.selectors';
import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import './AccountPage.scss';

const AccountPage = ({ currentUser, fetchOrdersStart, orderItems }) => {
  const { id, displayName } = currentUser;
  useEffect(() => {
    fetchOrdersStart(id);
  }, [fetchOrdersStart, id])
  
  return (
    <React.Fragment>
      <BreadCrumbNav title='Account' /> 
      <section className='account-page'>
        <h2>Account</h2>
        <h3>{`Hello, ${displayName}!`}</h3>
        <span className='edit-profile'>Edit Profile</span>
        <div className='orders-overview'>
          <h4>Orders</h4>
          <div className='orders-seperator'></div>
          { orderItems.length ?
            orderItems.map(order => <OrderItems key={order.id} order={order} />)
            : (<div className='orders-empty-message'>There are no orders</div>)
          }
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  orderItems: selectOrderItems
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersStart: currentUserId => dispatch(fetchOrdersStart(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);