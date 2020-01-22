import React from 'react';

import OrderItem from '../OrderItem/OrderItem';
import './OrderItems.scss';

export const OrderItems = ({ order }) => {
  const { id, total, products, createdAt } = order;
  const dateObject = new Date(createdAt.toDate());
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const date = `${month}/${day}/${year}`;

  return (
    <div className='order-items'>
      <div className='order-details'>
        <span className='order-number'>
          <span className='bold'>Order #: </span>
          {id}
        </span>
        <span className='order-date'>
          <span className='bold'>Order Placed: </span>
          {date}
        </span>
      </div>
      <div className='order-header'>
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
      { products.map(item => <OrderItem key={item.id} item={item} />)}
      <div className='total'>
        <span className='total-bold'>Total: <span>${total}</span></span>
      </div>
    </div>
  );
};

export default OrderItems;