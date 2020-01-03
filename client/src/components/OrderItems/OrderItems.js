import React from 'react';

import './OrderItems.scss';

const OrderItems = () => {
  return (
    <div className='order-items'>
      <div className='order-header'>
        <div className='header-block'>
          <span>Order #</span>
        </div>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Title</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
      </div>
      <div className='total'>
        <span className='total-bold'>Total: <span>$100</span></span>
      </div>
    </div>
  );
};

export default OrderItems;