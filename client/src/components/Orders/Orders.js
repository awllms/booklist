import React from 'react';
import { Link } from 'react-router-dom';

import OrderItems from '../../components/OrderItems/OrderItems';

const Orders = ({ orderItems }) => {
  return (
    <React.Fragment>
      { orderItems.length ?
        orderItems.map(order => <OrderItems key={order.id} order={order} />)
        : (
            <div className='orders-empty-message'>
              <span>There are no orders. Let's change that. </span>
              <Link className='shop-link' to='/shop'>Shop Now</Link>
            </div>
          )
      }
    </React.Fragment>
  );
};

export default Orders;