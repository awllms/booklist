import React from 'react';

import OrderItems from '../../components/OrderItems/OrderItems';

const Orders = ({ orderItems }) => {
  return (
    <React.Fragment>
      { orderItems.length ?
        orderItems.map(order => <OrderItems key={order.id} order={order} />)
        : (<div className='orders-empty-message'>There are no orders</div>)
      }
    </React.Fragment>
  );
};

export default Orders;