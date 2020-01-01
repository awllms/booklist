import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';

import './DirectoryItem.scss';

const DirectoryItem = ({ item, history, addItem }) => {
  const { title, imageUrl, price } = item;
  return (
    <div className='directory-item'>
      <div className='directory-item-image' onClick={() => history.push(`/${item.routeName}`)}>
        <img className='image' src={ imageUrl } alt='products' />
      </div>
      <div className='directory-meta' onClick={() => history.push(`/${item.routeName}`)}>
        <h4>{ title }</h4>
        <span>${ price }</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(DirectoryItem));